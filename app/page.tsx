import Image from "next/image";
import Link from "next/link";
import { robotoSlab } from "./layout";

const services = [
  {
    icon: "fas fa-tooth",
    title: "Teeth Cleaning",
    tag: "Preventive",
    desc: "Prevent buildup and maintain long-term oral health with professional cleaning.",
  },
  {
    icon: "fas fa-sun",
    title: "Whitening",
    tag: "Cosmetic",
    desc: "Brighten your smile with our safe and effective cosmetic whitening treatment.",
  },
  {
    icon: "fas fa-teeth",
    title: "Braces",
    tag: "Orthodontic",
    desc: "Straighten teeth and improve your bite with modern orthodontic solutions.",
  },
  {
    icon: "fas fa-heart",
    title: "Root Canal",
    tag: "Restorative",
    desc: "Save severely infected or damaged teeth with gentle, precise root canal care.",
  },
  {
    icon: "fas fa-hippo",
    title: "Implants",
    tag: "Restorative",
    desc: "Permanent tooth replacement that looks, feels, and functions like the real thing.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Cosmetic Dentistry",
    tag: "Cosmetic",
    desc: "Transform your smile with veneers, bonding, and other aesthetic procedures.",
  },
  {
    icon: "fas fa-ambulance",
    title: "Emergency Care",
    tag: "Urgent",
    desc: "Immediate attention for urgent dental pain, injuries, and unexpected issues.",
  },
];

function ServiceCard({
  icon,
  title,
  tag,
  desc,
  robotoSlab,
}: {
  icon: any;
  title: any;
  tag: any;
  desc: any;
  robotoSlab: any;
}) {
  return (
    <div className="service-card bg-[#f0e4d2e3] rounded-[30px] p-6 flex flex-col gap-0">
      <span className="icon-wrap bg-main text-white p-3 rounded-[20px] w-fit">
        <i className={`${icon} text-lg`} />
      </span>

      <div className="flex items-center justify-between mt-6 mb-2">
        <h2
          className={`${robotoSlab.className} text-[1.15rem] font-bold text-main`}
        >
          {title}
        </h2>
        <i className="fas fa-arrow-right text-main text-sm" />
      </div>

      <p className="text-sm text-main/80 leading-relaxed flex-1">{desc}</p>

      <span className="tag-pill mt-3">{tag}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center mt-4">
        <div className="w-300 flex flex-col justify-center items-center bg-main rounded-[30px] overflow-hidden relative">
          <h1
            className={`${robotoSlab.className} font-bold text-6xl md:text-8xl lg:text-[10rem] mt-10 z-2`}
          >
            Dentalcare
          </h1>

          <div className="w-full flex justify-around items-center mb-10 z-20">
            <p className="flex items-center gap-2">
              <span className="rounded-full bg-accent-two w-8 h-8 flex items-center justify-center">
                <i className="fas fa-star text-sm"></i>
              </span>
              Make your smile shine
            </p>

            <p className="flex items-center gap-2">
              <span className="rounded-full bg-accent-two w-8 h-8 flex items-center justify-center">
                <i className="fas fa-tooth text-sm"></i>
              </span>
              No more pain
            </p>
          </div>

          <Image
            src="/doctor.png"
            alt="Dentalcare"
            width={350}
            height={250}
            className="absolute bottom-[-25] z-10"
          />

          <div className="w-full flex justify-between items-end p-10 z-20">
            <p className="w-100">
              If you are looking for a dental clinic that provides high-quality
              care and a comfortable environment, look no further than our
              dental clinic.
            </p>

            <Link
              href="/contact"
              className="rounded-[30px] py-3 px-5 bg-[#F5A623] flex items-center gap-2 hover:scale-105 transition"
            >
              <i className="fas fa-phone"></i>
              Contact
            </Link>
          </div>
        </div>
        <div className="w-300 flex flex-col justify-center items-center mt-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-accent rounded-[30px] p-6">
              <h1
                className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}
              >
                Instant Video Consultation
              </h1>
              <p>Get expert advice from the comfort of your home.</p>
              <div className="flex justify-between items-end">
                <Link
                  href="/video-consultation"
                  className="text-white underline"
                >
                  <i className="fas fa-arrow-right text-[1.5rem]"></i>
                </Link>
                <i className="fas fa-video text-[10rem] opacity-50"></i>
              </div>
            </div>
            <div className="bg-accent-two rounded-[30px] p-6">
              <h1
                className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}
              >
                Strong Support Team
              </h1>
              <p>Our team is always here to help you with any questions.</p>
              <div className="flex justify-between items-end">
                <Link
                  href="/video-consultation"
                  className="text-white underline"
                >
                  <i className="fas fa-arrow-right text-[1.5rem]"></i>
                </Link>
                <i className="fas fa-headset text-[10rem] opacity-50"></i>
              </div>
            </div>
            <div className="bg-[#F5A623] rounded-[30px] p-6">
              <h1
                className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}
              >
                Flexible Scheduling
              </h1>
              <p>Book your appointment at a time that works best for you.</p>
              <div className="flex justify-between items-end">
                <Link
                  href="/video-consultation"
                  className="text-white underline"
                >
                  <i className="fas fa-arrow-right  text-[1.5rem]"></i>
                </Link>
                <i className="fas fa-calendar text-[10rem] opacity-50"></i>
              </div>
            </div>
            <div className="bg-[#785db8] rounded-[30px] p-6">
              <h1
                className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}
              >
                Competitive Pricing
              </h1>
              <p>
                We offer affordable dental care without compromising on quality.
              </p>
              <div className="flex justify-between items-end">
                <Link
                  href="/video-consultation"
                  className="text-white underline"
                >
                  <i className="fas fa-arrow-right text-[1.5rem]"></i>
                </Link>
                <i className="fas fa-tag text-[10rem] opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="mt-4 flex flex-col justify-center items-center p-10">
        <div className="w-300 flex flex-col justify-center items-center bg-main rounded-[30px] p-10">
          {/* Header */}
          <div className="w-full flex justify-between items-end">
            <h1
              className={`${robotoSlab.className} text-white text-[2rem] font-bold leading-tight`}
            >
              Our Main <br />
              Services
            </h1>

            <Link
              href="/services"
              className="text-white underline flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              View All Services <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>

          {/* Grid */}
          <div className="w-full grid grid-cols-4 gap-4 text-main mt-10">
            {services.map(({ icon, title, tag, desc }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                tag={tag}
                desc={desc}
                robotoSlab={robotoSlab}
              />
            ))}

            {/* More CTA */}
            <Link
              href="/services"
              className="
              group
              bg-[#f0e4d2e3] rounded-[30px] p-6
              flex flex-col items-center justify-center text-center gap-2
              border-2 border-dashed border-[#785db870]
              hover:border-[#785db8] transition-all duration-300
            "
            >
              <span
                className="
                bg-main text-white p-3 rounded-[30px]
                transition-all duration-300
                group-hover:bg-main group-hover:scale-110 group-hover:rotate-90
                group-hover:rounded-[20px]
              "
              >
                <i className="fas fa-plus text-lg" />
              </span>

              <p
                className={`${robotoSlab.className} text-[1rem] font-bold text-main mt-2`}
              >
                More Services
              </p>

              <p className="text-sm text-main/70">
                Explore all available treatments
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
