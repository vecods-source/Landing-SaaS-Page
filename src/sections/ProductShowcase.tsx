import Image from "next/image";
import Productimg from "@/assets/product-image.png";
import Tubeimg from "@/assets/tube.png";
import Diamondimg from "@/assets/pyramid.png";
export const ProductShowcase = () => {
  return (
    <div>
      <div className="section py-24 overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] ">
        <div className="container">
          <div className=" max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="small-text-border">Boost your productivity</div>
            </div>
            <h2 className="side-title">
              A more effective way to track progress
            </h2>
            <p className="side-para">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>
          <div className="relative">
            <Image alt={"product image"} src={Productimg} className="mt-10" />
            <Image
              alt={"Cylinder image"}
              src={Tubeimg}
              height={248}
              className="hidden md:block absolute -left-36 bottom-24"
            />
            <Image
              alt={"Diamond image"}
              src={Diamondimg}
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
