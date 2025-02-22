"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestiaLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";

const logos = [apex, acmeLogo, quantumLogo, echoLogo, celestiaLogo, pulseLogo];

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 w-max pr-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="logo"
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
