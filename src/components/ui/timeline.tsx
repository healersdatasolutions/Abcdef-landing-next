"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEvent {
  title: string;
  content: string | string[];
}

interface TimelineEntry {
  year: string;
  events: TimelineEvent[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 mt-10 text-black dark:text-white max-w-4xl">
          Healers Healthcare Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Our journey to excellence in healthcare.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((yearData, yearIndex) => (
          <div key={yearIndex} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
              {yearData.year}
            </h3>
            {yearData.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className="flex justify-center gap-8 md:gap-12 mb-12"
              >
                <div className="w-1/2 md:w-2/5 text-right">
                  <h4 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                    {event.title}
                  </h4>
                </div>
                <div className="relative">
                  <div className="absolute h-full w-px bg-neutral-300 dark:bg-neutral-700 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="w-1/2 md:w-2/5">
                  {Array.isArray(event.content) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {event.content.map((item, index) => (
                        <li key={index} className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                      {event.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-1/2 top-0 w-px bg-blue-500"
        />
      </div>
    </div>
  );
};

