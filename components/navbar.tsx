"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4">
      <nav className="w-full max-w-7xl flex justify-between items-center py-5 px-6 md:px-8 border border-white/10 rounded-[30px] mt-6 bg-main relative">
        {/* Logo */}
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-3 lg:gap-5">
          <li className="bg-[#baeeea10] rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/">Home</Link>
          </li>

          <li className="bg-[#baeeea10] rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/about">About</Link>
          </li>

          <li className="bg-[#baeeea10] rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/services">Services</Link>
          </li>

          <li className="bg-[#baeeea10] rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/teams">Teams</Link>
          </li>

          <li className="bg-[#baeeea10] rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block rounded-[30px] py-2 px-5 bg-[#F5A623] hover:scale-105 transition"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[105%] left-0 w-full bg-main rounded-[30px] p-4 border border-white/10 md:hidden z-50">
            <ul className="flex flex-col gap-3">
              <li className="bg-[#baeeea10] rounded-xl py-3 px-4">
                <Link href="/">Home</Link>
              </li>

              <li className="bg-[#baeeea10] rounded-xl py-3 px-4">
                <Link href="/about">About</Link>
              </li>

              <li className="bg-[#baeeea10] rounded-xl py-3 px-4">
                <Link href="/services">Services</Link>
              </li>

              <li className="bg-[#baeeea10] rounded-xl py-3 px-4">
                <Link href="/teams">Teams</Link>
              </li>

              <li className="bg-[#baeeea10] rounded-xl py-3 px-4">
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block text-center rounded-[30px] py-3 px-4 bg-[#F5A623]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
