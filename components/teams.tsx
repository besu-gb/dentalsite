"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const doctors = [
    {
      name: "Dr. Abel",
      role: "General Dentist",
      image: "/drabel.jpeg",
    },
    {
      name: "Dr. Asefa",
      role: "Orthodontist",
      image: "/drasefa.jpeg",
    },
    {
      name: "Dr. Binyam",
      role: "Dental Surgeon",
      image: "/drbinyam.jpeg",
    },
  ];

  const [currentDoctor, setCurrentDoctor] = useState(0);

  const nextDoctor = () => {
    setCurrentDoctor((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const prevDoctor = () => {
    setCurrentDoctor((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-4 flex flex-col justify-center items-center mt-14 mb-14 px-4">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center bg-main rounded-[30px] p-6 md:p-8 lg:p-10 gap-6">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className={`text-white text-2xl md:text-3xl font-bold text-center md:text-left`}>
            Our Experienced & Skilled Professionals
          </h1>

          <Link
            href="/team"
            className="text-white bg-button rounded-[30px] py-3 px-6 transition-all duration-300 hover:scale-105"
          >
            Meet Our Team
          </Link>
        </div>

        {/* Doctor Section */}
        <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-10 mt-4 mb-8">
          <div className="flex flex-col items-center">
            <p className="text-center py-6 px-6 rounded-[30px] bg-accent mt-4 rotate-3">
              We help freshen teeth
            </p>

            <p className="text-center py-6 px-6 rounded-[30px] bg-accent-two mt-8 -rotate-3">
              We help reduce plaque
            </p>

            <p className="text-center text-main py-6 px-6 rounded-[30px] bg-[#f0e4d2e3] mt-8 rotate-3">
              We provide comprehensive dental care
            </p>
          </div>

          {/* Doctor Image */}
          <div>
            <Image
              src={doctors[currentDoctor].image}
              alt={doctors[currentDoctor].name}
              width={300}
              height={350}
              className="rounded-[30px] w-[300px] h-[350px] object-cover transition-all duration-500"
            />
          </div>

          {/* Doctor Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-white text-3xl font-bold">
              {doctors[currentDoctor].name}
            </h2>

            <p className="text-white/80 text-lg mt-2">
              {doctors[currentDoctor].role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevDoctor}
            className="py-2 px-6 rounded-lg bg-[#cbe1e256] text-white transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-arrow-left"></i>
          </button>

          <button
            onClick={nextDoctor}
            className="py-2 px-6 rounded-lg bg-gray-300 text-black transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
