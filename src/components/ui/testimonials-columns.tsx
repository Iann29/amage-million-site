"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image?: string;
  name: string;
  role?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: isPaused ? "0%" : "-50%",
        }}
        transition={{
          duration: props.duration || 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 cursor-pointer md:cursor-auto"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name }, i) => (
                <div className="p-8 rounded-2xl bg-gray-50 max-w-xs w-full select-none" key={i}>
                  <div className="text-gray-700 leading-relaxed">{text}</div>
                  <div className="mt-6">
                    <div className="font-semibold text-[#151515] leading-5">{name}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};