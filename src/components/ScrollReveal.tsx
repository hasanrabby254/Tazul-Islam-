/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 35,
}: ScrollRevealProps) {
  const getDirections = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirections() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.43, 1.01], // smooth custom ease-out
      }}
    >
      {children}
    </motion.div>
  );
}
