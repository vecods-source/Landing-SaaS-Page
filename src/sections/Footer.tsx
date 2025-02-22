import Logo from "@/assets/logosaas.png";
import Yt from "@/assets/social-youtube.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pint from "@/assets/social-pin.svg";
import X from "@/assets/social-x.svg";

import Image from "next/image";
export const Footer = () => {
  return (
    <div>
      <div className="section py-10 bg-black text-white">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={Logo} alt={"logo"} width={50} />
            <nav className="flex flex-col items-center justify-center list-none gap-4 opacity-50 md:flex-row">
              <li>About</li>
              <li>Features</li>
              <li>Customer</li>
              <li>Pricing</li>
              <li>Help</li>
              <li>Career</li>
            </nav>
            <div className="icons flex justify-center opacity-50 gap-4 md:flex-row">
              <X width={30} />
              <Yt width={30} />
              <Insta width={30} />
              <Linkedin width={30} />
              <Pint width={30} />
            </div>
            <p className="opacity-50">
              © 2024 Designed by Eng.Saad, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
