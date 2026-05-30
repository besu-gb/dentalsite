"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfterSection() {
  const patients = [
    {
      name: "Sarah Johnson",
      treatment: "Teeth Whitening",
      description:
        "Professional whitening treatment that restored a brighter and more confident smile.",
      before: "/doctor.png",
      after: "/doctor2.png",
    },
    {
      name: "Michael Brown",
      treatment: "Dental Veneers",
      description:
        "Custom veneers improved tooth shape, color, and overall smile appearance.",
      before: "/before2.jpg",
      after: "/after2.jpg",
    },
    {
      name: "Emma Wilson",
      treatment: "Orthodontic Treatment",
      description:
        "Alignment correction created a healthier bite and straighter smile.",
      before: "/before3.jpg",
      after: "/after3.jpg",
    },
  ];

  const [currentPatient, setCurrentPatient] = useState(0);

  const nextPatient = () => {
    setCurrentPatient((prev) => (prev === patients.length - 1 ? 0 : prev + 1));
  };

  const prevPatient = () => {
    setCurrentPatient((prev) => (prev === 0 ? patients.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-8 mb-14 px-4 flex justify-center">
      <div className="w-full max-w-7xl bg-main rounded-[30px] p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Patient Before & After
            </h2>
            <p className="text-white/70 mt-2">
              Real transformations from our satisfied patients.
            </p>
          </div>

          <div className="bg-button text-white px-6 py-3 rounded-full">
            Smile Transformations
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) prevPatient();
            if (info.offset.x < -100) nextPatient();
          }}
          className="grid lg:grid-cols-3 gap-8 items-center"
        >
          {/* Before */}
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-[30px]">
              <Image
                src={patients[currentPatient].before}
                alt="Before Treatment"
                width={350}
                height={400}
                className="w-full h-[400px] object-cover rounded-[30px]"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before
              </span>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-accent text-white px-6 py-3 rounded-full mb-6 rotate-2">
              Real Patient Result
            </div>

            <h3 className="text-white text-3xl font-bold">
              {patients[currentPatient].name}
            </h3>

            <p className="text-accent-two text-lg mt-2 font-semibold">
              {patients[currentPatient].treatment}
            </p>

            <p className="text-white/80 mt-6 leading-relaxed">
              {patients[currentPatient].description}
            </p>

            <div className="mt-8 flex gap-3">
              {patients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPatient(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentPatient === index ? "bg-white w-8" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-[30px]">
              <Image
                src={patients[currentPatient].after}
                alt="After Treatment"
                width={350}
                height={400}
                className="w-full h-[400px] object-cover rounded-[30px]"
              />
              <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                After
              </span>
            </div>
          </div>
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevPatient}
            className="w-14 h-14 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          >
            <i className="fas fa-arrow-left"></i>
          </button>

          <button
            onClick={nextPatient}
            className="w-14 h-14 rounded-full bg-button text-white hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
