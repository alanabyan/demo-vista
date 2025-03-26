"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeNavbar = (path: string) =>
    `font-medium text-[13px] rounded-[35px] tracking-wide transition-all ease-in duration-300 hover:bg-[#D9D9D9] hover:text-black py-2.5 px-7 ${
      pathname === path ? "bg-[#D9D9D9] text-black" : ""
    }`;

  return (
    <>
      {/* Navbar Desktop */}
      <div
        className={`${
          poppins.className
        } z-50 text-white fixed w-full py-6 px-6 transition-all ease-in duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
        } hidden md:block`}
      >
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-x-4">
            <Link href={"/"}>
              <li className={`${activeNavbar("/")}`}>Home</li>
            </Link>
            <Link href={"/destination"}>
              <li className={`${activeNavbar("/destination")}`}>Destination</li>
            </Link>
            <Link href={"/gallery"}>
              <li className={`${activeNavbar("/gallery")}`}>Gallery</li>
            </Link>
            <Link href={"/package"}>
              <li className={`${activeNavbar("/package")}`}>Package</li>
            </Link>
            <Link href={"/about"}>
              <li className={`${activeNavbar("/about")}`}>About Us</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Tombol Hamburger (Terpisah dari Navbar) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-6 right-6 z-50 rounded-2xl transition-all duration-300 ease-in text-white focus:outline-none ${
          isScrolled
            ? "bg-black/50 backdrop-blur-lg px-2 py-2"
            : "bg-transparent"
        }`}
      >
        <Icon
          icon={isOpen ? "akar-icons:cross" : "heroicons-outline:menu"}
          className="w-8 h-8"
        />
      </button>
    </>
  );
}
