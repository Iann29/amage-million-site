"use client";
import React from "react";
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
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl bg-gray-50 max-w-xs w-full" key={i}>
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