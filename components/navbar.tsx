import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <nav className="w-300 flex justify-between items-center py-6 px-8 border-1-gray-400 rounded-[30px] mt-8 ">
        <div>
          <Link href="/">
            <Image src="/vercel.svg" alt="Logo" width={40} height={10} />
          </Link>
        </div>

        <ul className="flex gap-5">
          <li className="bg-[#baeeea10] border-0 rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-[#baeeea10] border-0 rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/about">About</Link>
          </li>
          <li className="bg-[#baeeea10] border-0 rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/services">Services</Link>
          </li>
          <li className="bg-[#baeeea10] border-0 rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/teams">Teams</Link>
          </li>
          <li className="bg-[#baeeea10] border-0 rounded-xl py-2 px-4 transition-all hover:bg-[#baeeea20]">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="border-0 rounded-[30px] py-2 px-4 bg-[#F5A623]"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
