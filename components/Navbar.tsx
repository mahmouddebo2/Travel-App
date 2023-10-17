"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleMobileNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="flexBetween  max-container padding-container relative z-30  py-5  ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden  h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden  ">
        <Button
          type={"button"}
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className=" lg:hidden ">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="relative  inline-block cursor-pointer hover:bg-gray-300 transition ease-in-out duration-300 lg:hidden "
          onClick={toggleMobileNavbar}
        />

        {isClick && (
          <div className="absolute right-10 z-50 flex flex-col  mx-auto">
            <div className="bg-green-500  bg-opacity-75 mt-3 rounded-md w-[300px] flex flex-col flexCenter ">
              <ul className="  flex flex-col justify-center  space-y-2 mt-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className=" hover:text-gray-100 transition-all rounded max-w-fit px-2  "
                  >
                    {link.label}
                  </Link>
                ))}
             
              </ul>
              <div className="flexCenter   space-y-6 ">
                <div className="mt-2 py-1" >
                  <Button 
                  
                    type={"button"}
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                  
                  />
                </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
