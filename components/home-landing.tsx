"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import TeamSection from "@/components/teams";
import BeforeAfterSection from "@/components/satisfaction";

const services = [
  {
    icon: "fas fa-tooth",
    title: "Teeth Cleaning",
    tag: "Preventive",
    desc: "Clean, polished, and protected with precision care that keeps problems away before they start.",
  },
  {
    icon: "fas fa-sun",
    title: "Whitening",
    tag: "Cosmetic",
    desc: "A brighter smile with a clean finish, crafted to look natural and camera-ready.",
  },
  {
    icon: "fas fa-teeth",
    title: "Braces",
    tag: "Orthodontic",
    desc: "Modern alignment solutions that straighten your smile with comfort and control.",
  },
  {
    icon: "fas fa-heart",
    title: "Root Canal",
    tag: "Restorative",
    desc: "Gentle treatment that relieves pain fast and saves teeth with careful precision.",
  },
  {
    icon: "fas fa-hippo",
    title: "Implants",
    tag: "Restorative",
    desc: "Strong, natural-looking replacements that restore confidence and everyday function.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Cosmetic Dentistry",
    tag: "Cosmetic",
    desc: "Tailored enhancements that refine shape, balance, and smile harmony.",
  },
  {
    icon: "fas fa-ambulance",
    title: "Emergency Care",
    tag: "Urgent",
    desc: "Fast response when pain or damage cannot wait. We handle urgent cases with care.",
  },
];

const proofPoints = [
  {
    label: "Fast replies",
    value: "Same-day",
  },
  {
    label: "Comfort focus",
    value: "Gentle care",
  },
  {
    label: "Patient trust",
    value: "From invites",
  },
];

const highlights = [
  "Healthy Smile Solutions",
  "Comfortable and Gentle Care",
  "Simple Steps to Book Your Visit",
];

function SectionTitle({
  eyebrow,
  title,
  copy,
  headingClassName,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  headingClassName: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="inline-flex items-center gap-2 rounded-full border-2 border-main bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-main shadow-[6px_6px_0_#10263f]">
        {eyebrow}
      </p>

      <h2
        className={`${headingClassName} mt-5 text-3xl font-bold leading-tight text-main sm:text-4xl`}
      >
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-main/75 sm:text-base">
        {copy}
      </p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  tag,
  desc,
  headingClassName,
}: {
  icon: string;
  title: string;
  tag: string;
  desc: string;
  headingClassName: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col rounded-[28px] border-2 border-main bg-white p-6 shadow-[8px_8px_0_#10263f] transition-transform duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-main bg-[#f8e8d0] text-main">
          <i className={`${icon} text-xl`} />
        </span>

        <span className="rounded-full border border-main bg-[#e9f6f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-main">
          {tag}
        </span>
      </div>

      <h3 className={`${headingClassName} mt-6 text-xl font-bold text-main`}>
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-main/75">{desc}</p>

      <div className="mt-6 flex items-center justify-between border-t border-main/15 pt-4 text-sm font-semibold text-main">
        <span>Learn more</span>
        <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.article>
  );
}

function TrustCard({
  title,
  text,
  icon,
  tone,
}: {
  title: string;
  text: string;
  icon: string;
  tone: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-[26px] border-2 border-main bg-white p-5 shadow-[8px_8px_0_#10263f]"
    >
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-main ${tone} text-main`}
        >
          <i className={`${icon} text-lg`} />
        </span>
        <h3 className="text-lg font-bold text-main">{title}</h3>
      </div>

      <p className="mt-4 text-sm leading-7 text-main/75">{text}</p>
    </motion.div>
  );
}

export default function HomeLanding({
  headingClassName,
}: {
  headingClassName: string;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <main className="overflow-x-hidden text-main">
      <section ref={heroRef} className="px-4 pt-4">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border-[3px] border-main bg-[#fffaf2] shadow-[12px_12px_0_#10263f]">
          <div className="grid gap-12 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center"
            >
              <p className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-main bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-main shadow-[6px_6px_0_#10263f]">
                Modern Dental Care You Can Trust
              </p>

              <h1
                className={`${headingClassName} mt-6 max-w-3xl text-4xl font-bold leading-[0.95] text-main sm:text-6xl lg:text-[4.6rem]`}
              >
                Healthy Smiles Start Here
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-main/75 sm:text-lg">
                Experience professional dental care in a clean, comfortable, and
                welcoming environment. Whether you need a routine checkup,
                cosmetic treatment, or urgent dental care, our team is here to
                help you smile with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-main bg-[#ffb347] px-4 py-2 font-bold text-main shadow-[8px_8px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
                >
                  <i className="fas fa-phone" />
                  Book a consultation
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-main bg-white px-4 py-2 font-bold text-main shadow-[8px_8px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore treatments
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <motion.div
                    key={point.label}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 18 }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="rounded-[22px] border-2 border-main bg-white p-4 shadow-[6px_6px_0_#10263f]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-main/60">
                      {point.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-main">
                      {point.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-main bg-[#e9f6f4] px-4 py-2 text-sm font-semibold text-main shadow-[5px_5px_0_#10263f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ y: heroY, rotate: heroRotate }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto flex w-full max-w-[620px] items-center justify-center"
            >
              <div className="absolute -left-18 -top-5 z-20 hidden w-44 rounded-[24px] border-2 border-main bg-[#f8e8d0] p-4 shadow-[8px_8px_0_#10263f] lg:block">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-main/60">
                  Quick Response
                </p>
                <p className="mt-2 text-xl font-bold text-main">
                  Same-Day Appointments
                </p>
                <p className="mt-2 text-sm leading-6 text-main/75">
                  Easy Booking for Every Patient
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-107.5 rounded-[34px] border-[3px] border-main bg-[#f8e8d0] p-4 shadow-[14px_14px_0_#10263f]"
              >
                <div className="overflow-hidden rounded-[26px] border-2 border-main bg-white">
                  <Image
                    src="/doctor.png"
                    alt="Doctor portrait"
                    width={520}
                    height={620}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border-2 border-main bg-white p-4 shadow-[6px_6px_0_#10263f]">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-main/60">
                      Digital consult
                    </p>
                    <p className="mt-2 text-lg font-bold text-main">
                      Video first
                    </p>
                  </div>

                  <div className="rounded-[22px] border-2 border-main bg-[#e9f6f4] p-4 shadow-[6px_6px_0_#10263f]">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-main/60">
                      Booking flow
                    </p>
                    <p className="mt-2 text-lg font-bold text-main">
                      Fast, clear
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: heroFloat }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute -bottom-11 -right-8 z-20 hidden w-42 rounded-3xl border-2 border-main bg-white p-4 shadow-[8px_8px_0_#10263f] lg:block"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-main">Conversion cue</p>
                  <i className="fas fa-bolt text-main" />
                </div>
                <p className="mt-3 text-sm leading-6 text-main/75">
                  Bold visuals, and calm reassurance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Services"
            title="Dental Services Made Simple"
            copy="Explore our treatments with clear information and easy-to-understand visuals that help you make confident decisions about your dental care."
            headingClassName={headingClassName}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  tag={service.tag}
                  desc={service.desc}
                  headingClassName={headingClassName}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="group flex min-h-[250px] flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-main bg-[#f8e8d0] p-6 text-center shadow-[8px_8px_0_#10263f]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-main bg-white text-main transition-transform duration-300 group-hover:rotate-20 group-hover:scale-105">
                <i className="fas fa-plus text-xl" />
              </div>
              <h3
                className={`${headingClassName} mt-5 text-2xl font-bold text-main`}
              >
                More Services
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-main/75">
                View every treatment we offer and find the right fit for your
                smile.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-main bg-white px-5 py-3 text-sm font-bold text-main shadow-[6px_6px_0_#10263f]"
              >
                Browse all
                <i className="fas fa-arrow-right" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:py-10">
        <div className="mx-auto max-w-7xl rounded-[36px] border-[3px] border-main bg-white p-6 shadow-[12px_12px_0_#10263f] md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                eyebrow="Why choose us"
                title="A clinic presence that feels confident, direct, and easy to trust."
                copy="This layout puts your strongest points up front so visitors understand your value quickly and keep scrolling."
                headingClassName={headingClassName}
              />

              <div className="mt-8 space-y-4">
                {[
                  "Clear appointment prompts for social and invitation traffic",
                  "Stronger visual contrast so the page feels premium and memorable",
                  "Motion that guides attention without feeling busy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[24px] border-2 border-main bg-[#f8e8d0] p-4 shadow-[6px_6px_0_#10263f]"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-main bg-white text-sm text-main">
                      <i className="fas fa-check" />
                    </span>
                    <p className="text-sm leading-7 text-main">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-main bg-[#ffb347] px-6 py-4 font-bold text-main shadow-[8px_8px_0_#10263f] transition-transform duration-300 hover:-translate-y-1"
              >
                See our story
                <i className="fas fa-arrow-right" />
              </Link>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TrustCard
                title="Fast first impression"
                text="A stronger visual system helps people decide they want to stay within the first few seconds."
                icon="fas fa-eye"
                tone="bg-[#e9f6f4]"
              />
              <TrustCard
                title="Warm but modern"
                text="The new look keeps the friendly clinic feeling while making the site feel much more current."
                icon="fas fa-heart"
                tone="bg-[#f8e8d0]"
              />
              <TrustCard
                title="Conversion focused"
                text="Buttons, section order, and motion all work together to move visitors toward contact."
                icon="fas fa-bullseye"
                tone="bg-[#fff4a8]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="rounded-[26px] border-2 border-main bg-[#10263f] p-5 text-white shadow-[8px_8px_0_#10263f]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
                  Designed for
                </p>
                <h3 className={`${headingClassName} mt-3 text-2xl font-bold`}>
                  social media traffic
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Visitors from Instagram, WhatsApp, TikTok, and invitations
                  need clarity fast. This structure gives them exactly that.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Clear", "Catchy", "Confident"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <BeforeAfterSection />
    </main>
  );
}
