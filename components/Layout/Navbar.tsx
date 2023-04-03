import { FC } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[70px] border-b border-neutral-300 px-2 sm:px-8 items-center justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
        <div className="font-bold text-xl">
          <span>Welcome to the AI clinic. Chat below to get a second opinion! Spare no details for the best results.</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};





