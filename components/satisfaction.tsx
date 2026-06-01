"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const patients = [
  {
    name: "Sarah Johnson",
    treatment: "Teeth Whitening",
    description:
      "A brighter, cleaner smile with a calm treatment flow and a natural finish.",
    before: "/doctor.png",
    after: "/doctor2.png",
  },
  {
    name: "Michael Brown",
    treatment: "Cosmetic Consultation",
    description:
      "A clearer smile story that looks sharper on camera and more confident in person.",
    before: "/drabel.jpeg",
    after: "/drasefa.jpeg",
  },
  {
    name: "Emma Wilson",
    treatment: "Smile Makeover",
    description:
      "Subtle changes, stronger harmony, and a result that feels more polished overall.",
    before: "/drbinyam.jpeg",
    after: "/doctor2.png",
  },
];

export default function BeforeAfterSection() {
  const [currentPatient, setCurrentPatient] = useState(0);

  const nextPatient = () => {
    setCurrentPatient((prev) => (prev === patients.length - 1 ? 0 : prev + 1));
  };

  const prevPatient = () => {
    setCurrentPatient((prev) => (prev === 0 ? patients.length - 1 : prev - 1));
  };

  return (
    <section className="px-4 py-6 pb-16">
      <div className="mx-auto max-w-7xl rounded-[36px] border-[3px] border-[#c6e7a0] bg-accent-two p-6 text-white shadow-[12px_12px_0_#4a7e0f] md:p-8 lg:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              Before / after proof
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Real transformations that make the result easy to believe.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Strong results are easier to sell when the experience feels clear
              and the visuals make the change obvious.
            </p>
          </div>

          <div className="rounded-full border border-white/15 bg-white/35 px-5 py-3 text-sm font-semibold">
            Swipe or tap to switch patients
          </div>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) prevPatient();
            if (info.offset.x < -100) nextPatient();
          }}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr_1fr] lg:items-center"
        >
          <motion.div
            key={`before-${currentPatient}`}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[360px] overflow-hidden rounded-[30px] border-2 border-white/15 bg-white/5 shadow-[8px_8px_0_#4a7e0f]">
              <div className="relative">
                <Image
                  src={patients[currentPatient].before}
                  alt="Before Treatment"
                  width={420}
                  height={520}
                  className="h-[420px] w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-main px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                  Before
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              <i className="fas fa-sparkles" />
              Patient result
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              {patients[currentPatient].name}
            </h3>
            <p className="mt-2 text-lg font-semibold text-main">
              {patients[currentPatient].treatment}
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              {patients[currentPatient].description}
            </p>

            <div className="mt-8 flex gap-3">
              {patients.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPatient(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentPatient === index
                      ? "w-10 bg-white"
                      : "w-3 bg-white/35"
                  }`}
                  aria-label={`View patient ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                onClick={prevPatient}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/35 px-5 py-3 text-sm font-bold text-main/85 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <i className="fas fa-arrow-left" />
                Prev
              </button>
              <button
                onClick={nextPatient}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-main bg-[#ffb347] px-5 py-3 text-sm font-bold text-main shadow-[6px_6px_0_#10263f] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Next
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>

          <motion.div
            key={`after-${currentPatient}`}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[360px] overflow-hidden rounded-[30px] border-2 border-white/15 bg-white/5 shadow-[8px_8px_0_#4a7e0f]">
              <div className="relative">
                <Image
                  src={patients[currentPatient].after}
                  alt="After Treatment"
                  width={420}
                  height={520}
                  className="h-[420px] w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                  After
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
