"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "../../lib/utils";
import React from "react";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0)),
          );
        }
      }),
    [springValue],
  );

  return (
    // make the the count animation starts again whenever there's a on MouseEnter event
    <span 
      className={cn(
        "inline-block tabular-nums  text-gray-500 dark:text-white tracking-wider",
        className,
      )}
      ref={ref}

      onMouseEnter={() => {
        motionValue.set(direction === "down" ? 0 : value);

      }}
      
    />
  );
}