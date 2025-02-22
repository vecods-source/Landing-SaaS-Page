"use client";
import Arrowicon from "@/assets/arrow-right.svg";
import Cogimg from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import Noodelimg from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateYscroll = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="small-text-border">Version 2 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold trakcing-tighter gradient-text mt-6">
              Pathway to productivty
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text">
                <span>Learn more</span>
                <Arrowicon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={Cogimg.src}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={Cylinder.src}
              width={225}
              height={225}
              alt="Cylinder Image"
              className="hidden md:block absolute -top-8 -left-32"
              style={{
                translateY: translateYscroll,
              }}
            />
            <motion.img
              src={Noodelimg.src}
              alt="noodel img"
              width={200}
              className="hidden lg:block absolute top-[555px] left-[460px]"
              style={{
                rotate: 30,
                translateY: translateYscroll,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
