import Link from "next/link";
import Image from "next/image";
import { robotoSlab } from "@/app/layout";

export function Footer() {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <footer className="w-full max-w-7xl flex flex-col justify-center items-center py-12 md:py-16 px-6 md:px-10 border border-white/10 rounded-[30px] bg-main text-white">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-start gap-10 mb-12">
          <div>
            <h2
              className={`${robotoSlab.className} text-2xl font-semibold mb-4`}
            >
              Contact Us
            </h2>

            <div className="space-y-2 text-gray-300">
              <p>123 Dental Street, Smile City</p>
              <p>(123) 456-7890</p>
              <p>info@dentalcare.com</p>
            </div>
          </div>

          <div>
            <h2
              className={`${robotoSlab.className} text-2xl font-semibold mb-4`}
            >
              Follow Us
            </h2>

            <div className="flex gap-3">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon) => (
                  <Link
                    key={icon}
                    href="#"
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <i className={`fab fa-${icon}`} />
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <h2
              className={`${robotoSlab.className} text-2xl font-semibold mb-4`}
            >
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src="/vercel.svg"
            alt="Dentalcare Logo"
            width={50}
            height={50}
            className="opacity-90"
          />

          <h1
            className={`${robotoSlab.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center`}
          >
            Dentalcare
          </h1>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Dentalcare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
