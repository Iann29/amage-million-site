"use client" 

import * as React from "react"
 
import { motion } from "motion/react";
 
export const BlurredStagger = ({
  text = "we love hextaui.com ❤️",
  highlightWord = "",
}: {
  text: string;
  highlightWord?: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      className="inline"
      viewport={{ 
        once: true,
        amount: 0.5
      }}
    >
      {headingText.split("").map((char, index) => {
        // const textUpToChar = headingText.slice(0, index);
        // const isInHighlightWord = highlightWord && 
        //  textUpToChar.includes(highlightWord.split("")[0]) && 
        //  headingText.slice(
        //    textUpToChar.lastIndexOf(highlightWord.split("")[0]), 
        //    textUpToChar.lastIndexOf(highlightWord.split("")[0]) + highlightWord.length
        //  ).includes(char);
        
        const simpleCheck = highlightWord && headingText.indexOf(highlightWord) !== -1 &&
          index >= headingText.indexOf(highlightWord) && 
          index < headingText.indexOf(highlightWord) + highlightWord.length;

        return (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.3 }}
            className={simpleCheck ? "text-primary" : ""}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};