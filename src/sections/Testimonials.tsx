"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];
const firstSlice = testimonials.slice(0, 3);
const SecondSlice = testimonials.slice(3, 6);
const ThirdSlice = testimonials.slice(6, 9);

const TestCol = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div className={`${props.className} `}>
    <motion.div
      className="pb-10"
      animate={{ y: ["0%", "-50%"] }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {[...props.testimonials, ...props.testimonials].map((item, index) => (
        <div key={index} className="card">
          <div>
            <p className="mb-5">{item.text}</p>
          </div>
          <div className="flex gap-2">
            <Image width={40} height={40} src={item.imageSrc} alt={item.name} />
            <div className="flex flex-col">
              <span className="leading-[20px] tracking-tight font-medium">
                {item.name}
              </span>
              <span className="tracking-tight">{item.username}</span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <div>
      <div className="section py-24 bg-white">
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center items-center">
              <div className="small-text-border">Testimonials</div>
            </div>
            <h2 className="side-title">What our users say</h2>
            <p className="side-para">
              From intuitive design to powerful features, our app has become an
              essential tool for users around the world.
            </p>
          </div>
          <div className="max-h-[796px]  flex gap-6 mt-10 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_70%,transparent)]">
            <TestCol testimonials={firstSlice} />
            <TestCol testimonials={SecondSlice} className="hidden md:block" />
            <TestCol testimonials={ThirdSlice} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
};
