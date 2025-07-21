import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="sticky bg-white top-0 z-2 flex justify-between w-100% h-10 border dark:bg-gray-800 items-center">
      <h1 className="mx-3 scroll-m-20 text-center text-xl font-bold tracking-tight text-balance">
        SQSC Student's Info
      </h1>
      <div className="mx-3 ">
      <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
