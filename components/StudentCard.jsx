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

const StudentCard = ({ data }) => {
  return (
    <Card className="m-2">
      <CardHeader>
        <CardTitle className="flex flex-col gap-3">
          <div className="flex gap-5">
            <div>{data.Class}</div>
            <div>{data.Section}</div>
            <div>{data.RollNo}</div>
          </div>
          <div>
            <div>{data.StudentName}</div>
          </div>
        </CardTitle>
        <CardDescription>
          <div>Father's Name: {data.FathersName}</div>
          <div>Address: {data.Village}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="active:scale-95" onClick={()=>console.log(data.StCode)}>See More</Button>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
