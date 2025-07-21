"use client"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import StudentCard from "../components/StudentCard";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect, useCallback } from "react";



import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import "./globals.css"

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center">
        <App />
      </div>
    </QueryClientProvider>
  );
}

function App() {
  const class_section = {
    "SIX": ["GOLAP", "SHAPLA", "BELI", "SHEULY", "TAGAR", "BAKUL"],
    "SEVEN": ["DOYEL", "KOYEL", "MOYNA", "TIYA", "EAGLE", "KOKIL"],
    "EIGHT": ["SHITOLOKKHA", "MEGHNA", "PADMA", "JAMUNA"],
    "NINE": ["LAL", "SABUJ"],
    "TEN": ["AAM", "JAM"]
  };

  const { data: allStudentsData, isPending, isError, error } = useQuery({
    queryFn: async () => {
      let a = await fetch(process.env.NEXT_PUBLIC_GOOGLESHEETURI)
      let data = await a.json()
      return data
    },
    queryKey: ["students"],
  })

  // State to hold the currently selected class and section
  // Changed initial state to a distinct string for "all"
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");

  // State to hold the students currently displayed after filtering
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Memoized function to apply filters
  const applyFilters = useCallback(() => {
    if (!allStudentsData) {
      setFilteredStudents([]);
      return;
    }

    let currentFiltered = allStudentsData;

    // Filter by class if selected (and not "all")
    if (selectedClass !== "all") {
      currentFiltered = currentFiltered.filter(
        (record) => record.Class === selectedClass
      );
    }

    // Filter by section if selected (and not "all")
    if (selectedSection !== "all") {
      currentFiltered = currentFiltered.filter(
        (record) => record.Section === selectedSection // Assuming 'Section' is the field name in your data
      );
    }

    setFilteredStudents(currentFiltered);
  }, [allStudentsData, selectedClass, selectedSection]);

  // Apply filters whenever allStudentsData, selectedClass, or selectedSection changes
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Handlers for Select components
  const handleClassChange = (value) => {
    setSelectedClass(value);
    setSelectedSection("all"); // Reset section to "all" when class changes
  };

  const handleSectionChange = (value) => {
    setSelectedSection(value);
  };

  const resetFilters = () => {
    setSelectedClass("all"); // Reset to "all" for class
    setSelectedSection("all"); // Reset to "all" for section
    // applyFilters will be called by useEffect due to state changes
  };

  // Loading and Error states for react-query
  if (isPending) {
    return <span>Loading student data...</span>;
  }

  if (isError) {
    return <span>Error loading students: {error.message}</span>;
  }

  return (
    <div className='min-w-full'>
      <div className="flex items-center justify-center sticky top-[26px] z-10">
        <div className="flex px-2 rounded-sm py-1 gap-2 justify-center mt-3 bg-white dark:bg-accent">

          {/* Class Select */}
          <Select onValueChange={handleClassChange} value={selectedClass}>
            <SelectTrigger className="w-[33%] max-w-[180px] ">
              {/* If value is 'all', show placeholder, otherwise show the selected value */}
              <SelectValue placeholder="Select Class">
                {selectedClass === "all" ? "Select Class" : selectedClass}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Class</SelectLabel>
                {/* Changed value from "" to "all" */}
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="SIX">SIX</SelectItem>
                <SelectItem value="SEVEN">SEVEN</SelectItem>
                <SelectItem value="EIGHT">EIGHT</SelectItem>
                <SelectItem value="NINE">NINE</SelectItem>
                <SelectItem value="TEN">TEN</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Section Select - Dynamic based on selectedClass */}
          <Select
            onValueChange={handleSectionChange}
            value={selectedSection}
            // Disable if no class selected (or "all" class selected) or no sections defined for the class
            disabled={selectedClass === "all" || !class_section[selectedClass] || class_section[selectedClass].length === 0}
          >
            <SelectTrigger className="w-[33%] max-w-[180px] ">
              {/* If value is 'all', show placeholder, otherwise show the selected value */}
              <SelectValue placeholder="Select Section">
                 {selectedSection === "all" ? "Select Section" : selectedSection}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Section</SelectLabel>
                {/* Changed value from "" to "all" */}
                <SelectItem value="all">All Sections</SelectItem>
                {/* Only render sections if a specific class is selected (not "all") */}
                {selectedClass !== "all" && class_section[selectedClass] && class_section[selectedClass].map((section) => (
                  <SelectItem key={section} value={section}>
                    {section}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button onClick={resetFilters}>Clear Filters</Button>
        </div>
      </div>
      <div className="mt-1">
        <RowVirtualizerFixed data={filteredStudents} />
      </div>
    </div>
  );
}

// RowVirtualizerFixed component (no changes needed here related to the Select.Item error)
function RowVirtualizerFixed({ data: virtualizerData }) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: virtualizerData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220,
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: `100%`,
          width: `100%`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `100%`,
                height: `${virtualRow.height}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <StudentCard data={virtualizerData[virtualRow.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}