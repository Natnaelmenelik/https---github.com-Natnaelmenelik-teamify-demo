"use client";
import React from "react";
import Image from "next/image";
import Teamify from "@/public/images/Teamify-logo.png";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="relative main-container">
      <div className="flex justify-between p-5">
        <Image src={Teamify} alt="teamify-logo" className="w-36 h-8" />

        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/"
            className={`text-xl font-sans ${
              pathname === "/"
                ? "font-bold underline"
                : "font-light hover:underline hover:font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-xl font-sans ${
              pathname === "/features"
                ? "font-bold underline"
                : "font-light hover:underline hover:font-bold"
            }`}
          >
            Features
          </Link>
          <Link
            href="/about"
            className={`text-xl font-sans ${
              pathname === "/about"
                ? "font-bold underline"
                : "font-light hover:underline hover:font-bold"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`text-xl font-sans ${
              pathname === "/contact"
                ? "font-bold underline"
                : "font-light hover:underline hover:font-bold"
            }`}
          >
            Contact Us
          </Link>
        </div>

        <Button className="hidden md:flex font-bold text-lg bg-orange-500 rounded-sm w-26 hover:bg-amber-600">
          <Link href="/register">Sign In</Link>
        </Button>

        <div className="hamburger">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X /> : <AlignJustify />}
          </button>
        </div>
      </div>
      {showMenu && (
        <section className="bg-[#0c1017] top-32 w-full border-2 h-96 p-10 rounded-sm">
          <div className="flex flex-col items-center gap-10">
            <Link href="" className="text-xl hover:underline">
              Home
            </Link>
            <Link href="" className="text-xl hover:underline">
              Features
            </Link>
            <Link href="" className="text-xl hover:underline">
              About Us
            </Link>
            <Link href="" className="text-xl hover:underline">
              Contact Us
            </Link>

            <Button className="font-bold w-full text-lg bg-amber-500 rounded-sm hover:bg-amber-600">
              Sign In
            </Button>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
