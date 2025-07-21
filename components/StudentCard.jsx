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
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

import { useState } from "react";

const StudentCard = ({ data }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setDialogOpen(true);
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
              <div className="flex gap-5">
                <div>{data.Class}</div>
                <div>{data.Section}</div>
                <div>{data.RollNo}</div>
              </div>
              <div>
                <div>{data.StudentName}</div>
              </div>
            </div>
            <a className="text-blue-600 underline" onClick={handlePhoneClick}>Phone</a>
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
          onClick={() => console.log(data.StCode)}
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
            <Button variant="outline" onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleAllow}>Allow</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default StudentCard;
