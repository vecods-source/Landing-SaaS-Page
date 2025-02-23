"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Starimg from "@/assets/star.png";
import Springimg from "@/assets/spring.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const transfomerdY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <div>
      <div ref={sectionRef} className="section py-24 overflow-x-clip">
        <div className="container ">
          <div className="max-w-[540px] mx-auto  relative">
            <h2 className="side-title">Sign up for free today</h2>
            <p className="side-para">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="flex justify-center mt-10 gap-2">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text">
                <span>Learn more</span> <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
            <motion.img
              src={Starimg.src}
              alt="star img"
              width={360}
              height={360}
              className="hidden absolute md:block -left-[350px] -top-[137px]"
              style={{ translateY: transfomerdY }}
            />
            <motion.img
              src={Springimg.src}
              width={363}
              alt="spring img"
              className="hidden absolute md:block -right-[331px] -top-[19px]"
              style={{ translateY: transfomerdY }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
