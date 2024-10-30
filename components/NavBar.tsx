"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";


export const NavBar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() > 0.05) {
        setIsScrolled(true);
      } else {
        if (direction < 0) {
          setIsScrolled(false);
        
        } else {
          setIsScrolled(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: true ? 0 : -100,
          opacity: true ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `${isScrolled ? "bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100" : ""}
          flex w-full fixed top-0 inset-x-0 mx-auto z-[5000] items-center justify-center py-5 space-x-10 transition-all duration-200 ease-in-out`,
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 hover:text-accent transition-all duration-200 ease-in-out font-bold"
            )}
          >

            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
