import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestiaLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="flex justify-center items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-4 flex-none">
            <Image
              src={acmeLogo}
              alt={"logo image"}
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt={"logo image"}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt={"logo image"}
              className="logo-ticker-image"
            />
            <Image
              src={celestiaLogo}
              alt={"logo image"}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt={"logo image"}
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
