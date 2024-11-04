import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
className,
title,
description,
header,
icon,
}: {
className?: string;
title?: string | React.ReactNode;
description?: string | React.ReactNode;
header?: React.ReactNode;
icon?: React.ReactNode;
}) => {
return (
  <div
    className={cn(
      "row-span-1  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
      className
    )}
  >
    {header}
    <div className="group-hover/bento:translate-x-2 transition duration-200">
      {icon}
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {title}
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  </div>
);
};

export const BentoGridItem2 = ({
  className,
  title,
  description,
  header,
  icon,
  }: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  }) => {
  return (
    <div
      className={cn(
        "h-[22rem] sm:h-auto  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black  justify-end flex  flex-col ",
        className
      )}
    >
      
      <div className="z-[21] p-4 group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className=" font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className=" font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
      <div className="absolute w-[24.2rem] sm:w-[23.2rem] md:w-[23.2rem] lg:w-[20.5rem] xl:w-[23.2rem] ">

      {header}
      </div>
    </div>
  );
  };
  