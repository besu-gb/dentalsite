"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Abel",
    role: "General Dentist",
    image: "/drabel.jpeg",
    summary:
      "Focuses on calm, precise care that helps patients feel comfortable and informed.",
  },
  {
    name: "Dr. Asefa",
    role: "Orthodontist",
    image: "/drasefa.jpeg",
    summary:
      "Builds aligned, confident smiles with a clean process and modern orthodontic planning.",
  },
  {
    name: "Dr. Binyam",
    role: "Dental Surgeon",
    image: "/drbinyam.jpeg",
    summary:
      "Handles more complex treatments with steady hands, clarity, and patient-first care.",
  },
];

const carePhrases = [
  "Gentle treatment",
  "Straightforward communication",
  "Trusted by families and referrals",
];

export default function TeamSection() {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  const nextDoctor = () => {
    setCurrentDoctor((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const prevDoctor = () => {
    setCurrentDoctor((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  return (
    <section className="px-4 py-6">
      <div className="mx-auto max-w-7xl rounded-[36px] border-[3px] border-main bg-white p-6 shadow-[12px_12px_0_#10263f] md:p-8 lg:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-main bg-[#e9f6f4] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-main shadow-[6px_6px_0_#10263f]">
              Team spotlight
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-main sm:text-4xl">
              A team section that feels more like a premium profile carousel.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-main/75 sm:text-base">
              Visitors should instantly see expertise, warmth, and confidence.
              This section keeps the team human while upgrading the visual punch.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-main bg-[#ffb347] px-6 py-4 text-sm font-bold text-main shadow-[8px_8px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
          >
            Meet our team
            <i className="fas fa-arrow-right" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            {carePhrases.map((phrase, index) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`rounded-[26px] border-2 border-main p-5 shadow-[8px_8px_0_#10263f] ${
                  index === 0
                    ? "bg-[#f8e8d0] rotate-1"
                    : index === 1
                      ? "bg-[#e9f6f4] -rotate-1"
                      : "bg-white rotate-1"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-main/55">
                  Care promise
                </p>
                <p className="mt-2 text-lg font-bold text-main">{phrase}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              key={doctors[currentDoctor].name}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[460px]"
            >
              <div className="rounded-[34px] border-[3px] border-main bg-[#f8e8d0] p-4 shadow-[14px_14px_0_#10263f]">
                <div className="overflow-hidden rounded-[28px] border-2 border-main bg-white">
                  <Image
                    src={doctors[currentDoctor].image}
                    alt={doctors[currentDoctor].name}
                    width={560}
                    height={700}
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-main/55">
                      Current doctor
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-main">
                      {doctors[currentDoctor].name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-main/75">
                      {doctors[currentDoctor].role}
                    </p>
                  </div>

                  <div className="rounded-[22px] border-2 border-main bg-white px-4 py-3 text-sm font-semibold text-main shadow-[6px_6px_0_#10263f]">
                    <i className="fas fa-star mr-2" />
                    Featured professional
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-5 flex items-center gap-3">
              {doctors.map((doctor, index) => (
                <button
                  key={doctor.name}
                  type="button"
                  onClick={() => setCurrentDoctor(index)}
                  aria-label={`Show ${doctor.name}`}
                  className={`h-3 rounded-full border border-main transition-all ${
                    currentDoctor === index ? "w-10 bg-main" : "w-3 bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[30px] border-2 border-main bg-[#10263f] p-5 text-white shadow-[8px_8px_0_#10263f]">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Why they convert
              </p>
              <p className="mt-3 text-xl font-bold leading-tight">
                Strong expertise shown with clean visuals and calm, confident
                messaging.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                A social visitor needs immediate trust. This layout makes each
                doctor feel credible, polished, and easy to approach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={prevDoctor}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-main bg-white px-5 py-4 text-sm font-bold text-main shadow-[6px_6px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
              >
                <i className="fas fa-arrow-left" />
                Prev
              </button>

              <button
                type="button"
                onClick={nextDoctor}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-main bg-[#ffb347] px-5 py-4 text-sm font-bold text-main shadow-[6px_6px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
              >
                Next
                <i className="fas fa-arrow-right" />
              </button>
            </div>

            <div className="rounded-[30px] border-2 border-main bg-[#e9f6f4] p-5 shadow-[8px_8px_0_#10263f]">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-main/55">
                Summary
              </p>
              <p className="mt-3 text-sm leading-7 text-main">
                {doctors[currentDoctor].summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
