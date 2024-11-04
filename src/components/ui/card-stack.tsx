/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: React.JSX.Element;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div className="relative mt-10 w-full h-full">
      {cards.map((card, index) => {
        return (
          

          <motion.div
            key={card.id}
            variants={variants}
            
            className="absolute   h-36 w-full  rounded-xl  shadow-xl   shadow-black/[0.1] dark:shadow-black "
            style={{
              transformOrigin: "top center",
              
        backgroundSize: "400% 400%",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
            }}
          >
            <motion.div
      initial="initial"
      animate="animate"
      className="  h-full w-full    rounded-sm shadow-xl border   shadow-black/[0.1] dark:shadow-black flex flex-col justify-evenly"

      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background: "linear-gradient(-45deg, #0f243d, #040e3d, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
          <div className="flex justify-between items-center overflow-hidden">
            <h1 className="text-[10rem] text-white/65  opacity-35 -translate-x-12 translate-y-5">

              {card.image}
            </h1>
          <div className="-translate-x-7 flex flex-col gap-1">

            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              
              <h2 className="font-[Rockwell] font-bold text-neutral-500 text-[1.25rem]   dark:text-white">
                {card.name}
              </h2>
            </div>
            <p className=" text-sm font-[Consolas] text-white/70">

              {card.content}
            </p>
            <div>
              <p className="text-neutral-400 font-normal  dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </div>
          </div>
      </motion.div>
          </motion.div>
     
          
        );
      })}
    </div>
  );
};
