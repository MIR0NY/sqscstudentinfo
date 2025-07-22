import { Check, X, Phone } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { useState } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";

const StudentCard = ({ data }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleSeeMoreClick = (e) => {
    e.preventDefault();
    setMoreDetails(true);
  };

  const handleAllow = () => {
    setDialogOpen(false);
    window.location.href = `tel:${data.Contact}`;
  };

  const handleCancel = () => {
    setDialogOpen(false);
  };

  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              {data.Status != "Transferred" ? (
                <div className="flex gap-5">
                  <div>{data.StudentID}</div>
                  <div>{data.Class}</div>
                  <div>{data.Section}</div>
                  <div>{data.RollNo}</div>
                </div>
              ) : (
                "Transferred"
              )}
              <div>
                <div>{data.StudentName}</div>
              </div>
            </div>
            <Button
              variant="secondary"
              className="cursor-pointer"
              onClick={handlePhoneClick}
            >
              <Phone/>
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          <div>Father's Name: {data.FathersName}</div>
          <div>Address: {data.Village}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="active:scale-95"
          onClick={() => setMoreDetails(true)}
        >
          See More
        </Button>
      </CardFooter>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Permission Required</DialogTitle>
          </DialogHeader>
          <div>Do you want to open your phone app to call {data.Contact}?</div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleAllow}>Allow</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={moreDetails} onOpenChange={setMoreDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center text-center">
              <div>
                {data.StudentName} <br />
                {data.Status != "Transferred" ? (
                  <div className="flex gap-3 mt-3 justify-center text-sm">
                    <div>{data.StudentID}</div>
                    <div>{data.Class}</div>
                    <div>{data.Section}</div>
                    <div>{data.RollNo}</div>
                  </div>
                ) : (
                  "Transferred"
                )}
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="flex flex-col gap-3">
              <Card className="p-1">
                <CardHeader className="p-1 gap-0">
                  <CardTitle className="bg-accent rounded-sm p-2">
                    Personal Information
                  </CardTitle>

                  <CardDescription className="p-2">
                    <div>Father's Name: {data.FathersName}</div>
                    <div>Village: {data.Village}</div>
                    <div>Blood Group: {data.BloodGroup}</div>
                  </CardDescription>
                </CardHeader>

                <CardHeader className="p-1 gap-0">
                  <CardTitle className="bg-accent rounded-sm p-2">
                    Tuition Payments Summary
                  </CardTitle>

                  <CardDescription className="p-2">
                    {data.TuitionFee ? (
                      <div>
                        <div>
                          Monthly Tuition Fee:{" "}
                          {Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(data.TuitionFee)}
                          /-
                        </div>
                        <div>
                          Total Paid Amount:{" "}
                          {Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(data.TuitionAmount)}
                          /-
                        </div>
                        <div>Paid for: {data.TuitionPaid} Months</div>
                      </div>
                    ) : (
                      <div>Monthly Tuition Fee: Full Fee</div>
                    )}
                  </CardDescription>
                </CardHeader>

                {data.VehicleNo && (
                  <CardHeader className="p-1 gap-0">
                    <CardTitle className="bg-accent rounded-sm p-2">
                      Vehicle Payments Summary
                    </CardTitle>

                    <CardDescription className="p-2">
                      <div>
                        <div>Vehicle No: {data.VehicleNo}</div>
                        <div>
                          Monthly Vehicle Fee:{" "}
                          {Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(data.VehicleFee)}
                          /-
                        </div>
                        <div>
                          Total Paid Amount:{" "}
                          {Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(data.VehicleAmount)}
                          /-
                        </div>
                        <div>Paid for: {data.VehiclePaid} Months</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                )}
              </Card>

              <div className="flex">
                <div className="w-[50%] flex flex-col items-center ">
                  <div className="font-semibold">Half Yearly Exam Fee</div>
                  <div>
                    {data.HalfYearlyExamFee ? (
                      <span className="text-3xl"><Check/></span>
                    ) : (
                      <span className="text-3xl"><X/></span>
                    )}
                  </div>
                </div>
                <div className="w-[50%] flex flex-col items-center ">
                  <div className="font-semibold">Yearly Exam Fee</div>
                  <div>
                    {data.YearlyExamFee ? (
                      <span className="text-3xl"><Check/></span>
                    ) : (
                      <span className="text-3xl"><X/></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default StudentCard;
