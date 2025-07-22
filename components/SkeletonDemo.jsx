import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDemo = () => {
  return (
    <div className="flex flex-col min-w-full items-center">
      <div className="mt-3">
        <div className=" flex gap-3 py-1 bg-white dark:bg-accent rounded-sm px-2">
          <Skeleton className=" w-[76.125px] h-[33.75px]" />
          <Skeleton className=" w-[89.6406px] h-[33.75px]" />
          <Skeleton className=" w-[60.2656px] h-[33.75px]" />
        </div>
      </div>

      <div className="w-full space-y-7 px-2 py-3">
        <div className="h-52 flex border justify-between bg-card rounded-2xl p-6 ">
          <div className="space-y-3">
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[350px] h-3" />
            <Skeleton className="w-[350px] h-3" />
            <div className="mt-5">
              <Skeleton className="w-[90px] h-9" />
            </div>
          </div>
          <div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
        <div className="h-52 flex border justify-between bg-card rounded-2xl p-6 ">
          <div className="space-y-3">
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[350px] h-3" />
            <Skeleton className="w-[350px] h-3" />
            <div className="mt-5">
              <Skeleton className="w-[90px] h-9" />
            </div>
          </div>
          <div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
        <div className="h-52 flex border justify-between bg-card rounded-2xl p-6 ">
          <div className="space-y-3">
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[350px] h-3" />
            <Skeleton className="w-[350px] h-3" />
            <div className="mt-5">
              <Skeleton className="w-[90px] h-9" />
            </div>
          </div>
          <div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
        <div className="h-52 flex border justify-between bg-card rounded-2xl p-6 ">
          <div className="space-y-3">
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[350px] h-3" />
            <Skeleton className="w-[350px] h-3" />
            <div className="mt-5">
              <Skeleton className="w-[90px] h-9" />
            </div>
          </div>
          <div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
        <div className="h-52 flex border justify-between bg-card rounded-2xl p-6 ">
          <div className="space-y-3">
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[300px] h-5" />
            <Skeleton className="w-[350px] h-3" />
            <Skeleton className="w-[350px] h-3" />
            <div className="mt-5">
              <Skeleton className="w-[90px] h-9" />
            </div>
          </div>
          <div>
            <Skeleton className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDemo;
