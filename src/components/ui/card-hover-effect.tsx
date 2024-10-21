"use client";
/* eslint-disable prefer-const */
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ShineBorder from "./shine-border";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-transparent block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ShineBorder
                className="relative p-1 flex w-full flex-col overflow-hidden rounded-lg bg-background shadow-xl"
                color={["#000", "#015874","#fff"]}
              >

          <Card>
            <CardContent icon={item.icon} title={item.title} description={item.description} isHovered={hoveredIndex === idx} />
          </Card>
              </ShineBorder>
        </div>
      ))}
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg h-full w-full  p-4 overflow-hidden bg-[#000000] hover:bg-[#060b10] transition-all duration-200  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardContent = ({ icon, title, description, isHovered }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  isHovered: boolean;
}) => {
  return (
    <div className="relative h-64 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="flex flex-col items-center"
        initial={false}
        animate={isHovered ? { y: -20 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-6xl mb-4 transition-all duration-300 ease-in-out transform group-hover:scale-75 filter">
          {icon}
        </div>
        <motion.h4 
          className="text-zinc-100  font-semibold text-center tracking-wide text-2xl mb-2"
          animate={isHovered ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h4>
      </motion.div>
      <motion.p
        className="text-zinc-400 tracking-wide leading-relaxed text-xl text-center  absolute inset-x-0 bottom-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </div>
  );
};