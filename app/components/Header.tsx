"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "./UI/Button";
import Berrynet from "@/app/components/svg/berrynet";
import { Rocket } from "lucide-react";
import React, { useState, useEffect } from "react";
import { navlink } from "../constants/data";
import { HamburgerMenu } from "@/app/components/design/Header";
import MenuSvg from "@/app/components/svg/menu";
export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm flex items-center justify-between ${openNavigation ? "bg-n-8" : "bg-n-8/90"} backdrop-blur-sm`}
      >
        <Link href={"/"}>
          <Image
            className="fill-white"
            src={"berrynet-01.svg"}
            width={140}
            height={30}
            alt="logo"
          />
        </Link>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navlink.map((link) => (
              <Link
                className={` relative font-semibold px-4 py-2 hover:bg-purple-600/20 hover:text-yellow-400 rounded-xl transition-color ease-linear duration-300`}
                key={link.key}
                href={link.pathname}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center">
          <ButtonLink
            className="hidden lg:flex bg-yellow-500 text-yellow-950"
            href={"/"}
            icon={<Rocket />}
            text="SUBSCRIBE NOW!"
          />
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}
