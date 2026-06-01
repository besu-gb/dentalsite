"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/teams", label: "Teams" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 pt-4">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[32px] border-[3px] border-main bg-white px-5 py-4 shadow-[10px_10px_0_#10263f] md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full border-2 border-main bg-[#f8e8d0] px-4 py-2 text-main transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-main bg-white">
            <i className="fas fa-tooth text-lg" />
          </span>
          <span className="font-bold uppercase tracking-[0.2em]">Dentalcare</span>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full border-2 border-transparent px-4 py-2 text-sm font-semibold text-main transition-all duration-300 hover:border-main hover:bg-[#e9f6f4]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full border-2 border-main bg-[#ffb347] px-5 py-3 text-sm font-bold text-main shadow-[6px_6px_0_#10263f] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-main bg-[#e9f6f4] text-xl text-main md:hidden"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>

        {isOpen ? (
          <div className="absolute left-4 right-4 top-32 z-50 rounded-[28px] border-[3px] border-main bg-white p-4 shadow-[10px_10px_0_#10263f] md:hidden">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border-2 border-main bg-[#f8e8d0] px-4 py-3 font-semibold text-main transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-1 block rounded-2xl border-2 border-main bg-[#ffb347] px-4 py-3 text-center font-bold text-main shadow-[6px_6px_0_#10263f]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
