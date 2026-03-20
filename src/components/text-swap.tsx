"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextSwapProps {
  defaultText: string;
  hoverText: string;
}

export default function TextSwap({ defaultText, hoverText }: TextSwapProps) {
  const [hovered, setHovered] = useState(false);
  const [defaultWidth, setDefaultWidth] = useState<number | null>(null);
  const [hoverWidth, setHoverWidth] = useState<number | null>(null);
  const defaultRef = useRef<HTMLSpanElement>(null);
  const hoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (defaultRef.current) setDefaultWidth(defaultRef.current.offsetWidth);
    if (hoverRef.current) setHoverWidth(hoverRef.current.offsetWidth);
  }, [defaultText, hoverText]);

  const currentWidth =
    defaultWidth !== null && hoverWidth !== null
      ? hovered
        ? hoverWidth
        : defaultWidth
      : "auto";

  return (
    <span
      className="inline-flex items-baseline cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hidden measuring spans */}
      <span
        ref={defaultRef}
        className="invisible absolute whitespace-nowrap"
        aria-hidden
      >
        {defaultText}
      </span>
      <span
        ref={hoverRef}
        className="invisible absolute whitespace-nowrap"
        aria-hidden
      >
        {hoverText}
      </span>

      {/* Animated container */}
      <motion.span
        className="inline-flex items-baseline relative whitespace-nowrap"
        animate={{ width: currentWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {hovered ? (
            <motion.span
              key="hover"
              className="underline underline-offset-2 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {hoverText}
            </motion.span>
          ) : (
            <motion.span
              key="default"
              className="inline-block origin-center scale-125"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {defaultText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </span>
  );
}
