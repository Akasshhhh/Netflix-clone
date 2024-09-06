import Image from "next/image";
import React, { ReactNode } from "react";
import NetflixBg from "../../public/login_background.jpg"
import Logo from "../../public/netflix_logo.svg"

type Props = {};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image src={NetflixBg} alt="bg-image" className="hidden sm:flex sm:object-cover -z-10 brightness-50" priority fill />
      <Image src={Logo} alt="logo" className="absolute object-contain left-4 top-4 md:left-10 md:top-6" height={120} width={120} priority />
      {children}
    </div>
  );
};

export default AuthLayout;
//priority is a nextjs property so that whenever you reload the page, it gives these marker elements higher priority
//fill fills up all of the parent element