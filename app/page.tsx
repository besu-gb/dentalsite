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
      {/* hero section */}
      <section className="flex flex-col justify-center items-center mt-4 px-4">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center bg-main rounded-[30px] overflow-hidden relative py-5 z-10">
          <h1
            className={`${robotoSlab.className} font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[11rem] mt-8 md:mt-10 z-1 text-center`}
          >
            Dentalcare
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4 mb-8 z-20 px-6">
            <p className="flex items-center gap-2 text-center">
              <span className="rounded-full bg-accent-two w-8 h-8 flex items-center justify-center">
                <i className="fas fa-star text-sm"></i>
              </span>
              Make your smile shine
            </p>

            <p className="flex items-center gap-2 text-center">
              <span className="rounded-full bg-accent-two w-8 h-8 flex items-center justify-center">
                <i className="fas fa-tooth text-sm"></i>
              </span>
              No more pain
            </p>
          </div>

          <Image
            src="/doctor.png"
            alt="Dentalcare"
            width={400}
            height={400}
            className="absolute -bottom-20 w-48 sm:w-60 md:w-72 lg:w-96 h-auto z-10"
          />

          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 p-6 md:p-10 z-20">
            <p className="max-w-xl text-center md:text-left">
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
        <div className="w-full max-w-7xl flex flex-col justify-center items-center mt-4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            <div className="bg-accent rounded-[30px] p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div>
                <h1
                  className={`${robotoSlab.className} text-main text-2xl md:text-3xl font-bold leading-tight`}
                >
                  Instant Video Consultation
                </h1>

                <p className="mt-3 text-sm md:text-base">
                  Get expert advice from the comfort of your home.
                </p>
              </div>

              <div className="flex justify-between items-end mt-6 md:mt-1">
                <Link
                  href="/video-consultation"
                  className="text-white underline hover:scale-110 transition"
                >
                  <i className="fas fa-arrow-right text-xl md:text-2xl"></i>
                </Link>

                <i className="fas fa-video text-6xl md:text-8xl lg:text-[10rem] opacity-50"></i>
              </div>
            </div>

            <div className="bg-accent-two rounded-[30px] p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div>
                <h1
                  className={`${robotoSlab.className} text-main text-2xl md:text-3xl font-bold leading-tight`}
                >
                  Strong Support Team
                </h1>

                <p className="mt-3 text-sm md:text-base">
                  Our team is always here to help you with any questions.
                </p>
              </div>

              <div className="flex justify-between items-end mt-6 md:mt-1">
                <Link
                  href="/video-consultation"
                  className="text-white underline hover:scale-110 transition"
                >
                  <i className="fas fa-arrow-right text-xl md:text-2xl"></i>
                </Link>

                <i className="fas fa-headset text-6xl md:text-8xl lg:text-[10rem] opacity-50"></i>
              </div>
            </div>

            <div className="bg-[#F5A623] rounded-[30px] p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div>
                <h1
                  className={`${robotoSlab.className} text-main text-2xl md:text-3xl font-bold leading-tight`}
                >
                  Flexible Scheduling
                </h1>

                <p className="mt-3 text-sm md:text-base">
                  Book your appointment at a time that works best for you.
                </p>
              </div>

              <div className="flex justify-between items-end mt-6 md:mt-1">
                <Link
                  href="/video-consultation"
                  className="text-white underline hover:scale-110 transition"
                >
                  <i className="fas fa-arrow-right text-xl md:text-2xl"></i>
                </Link>

                <i className="fas fa-calendar text-6xl md:text-8xl lg:text-[10rem] opacity-50"></i>
              </div>
            </div>

            <div className="bg-[#785db8] rounded-[30px] p-6 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div>
                <h1
                  className={`${robotoSlab.className} text-main text-2xl md:text-3xl font-bold leading-tight`}
                >
                  Competitive Pricing
                </h1>

                <p className="mt-3 text-sm md:text-base">
                  We offer affordable dental care without compromising on
                  quality.
                </p>
              </div>

              <div className="flex justify-between items-end mt-6">
                <Link
                  href="/video-consultation"
                  className="text-white underline hover:scale-110 transition"
                >
                  <i className="fas fa-arrow-right text-xl md:text-2xl"></i>
                </Link>

                <i className="fas fa-tag text-6xl md:text-8xl lg:text-[10rem] opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="flex justify-center items-center px-4 mt-14 mb-14">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center bg-main rounded-[30px] p-6 md:p-8 lg:p-10">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h1
              className={`${robotoSlab.className} text-white text-3xl md:text-4xl font-bold leading-tight`}
            >
              Our Main <br />
              Services
            </h1>

            <Link
              href="/services"
              className="text-white underline flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              View All Services
              <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 md:mt-10 text-main">
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

            <Link
              href="/services"
              className="group bg-[#f0e4d2e3] rounded-[30px] p-6 min-h-62.5 flex flex-col items-center justify-center text-center gap-2 border-2 border-dashed border-[#785db870] hover:border-[#785db8] hover:-translate-y-1 transition-all duration-300"
            >
              <span className=" bg-main text-white p-3 rounded-[30px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-90 group-hover:rounded-[20px]">
                <i className="fas fa-plus text-lg" />
              </span>

              <p
                className={`${robotoSlab.className} text-lg font-bold text-main mt-2`}
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

      <section className="w-full mt-4 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center bg-[#552bb6] py-16 md:py-20 px-4">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5">
            <div className="relative lg:col-span-2 lg:row-span-2 bg-accent rounded-[30px] p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h1
                className={`${robotoSlab.className} text-main text-3xl md:text-4xl font-bold leading-tight`}
              >
                Why Choose Us?
              </h1>

              <p className="max-w-md text-sm md:text-base text-main/80 mt-4">
                We are committed to providing the best dental care with a focus
                on patient comfort and satisfaction.
              </p>

              <div className="flex justify-between items-end -mt-10">
                <Link
                  href="/about"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-main text-white transition hover:scale-110"
                >
                  <i className="fas fa-arrow-right text-lg" />
                </Link>

                <Image
                  src="/doctor2.png"
                  alt="Why choose us?"
                  width={350}
                  height={350}
                  className="relative -right-4 -bottom-14 w-68 md:w-84 lg:w-92 h-auto object-contain"
                />
              </div>
            </div>

            <div className="relative lg:col-span-2 bg-accent-two rounded-[30px] p-6 overflow-hidden">
              <h2
                className={`${robotoSlab.className} text-main text-xl font-bold`}
              >
                Experienced Team
              </h2>

              <p className="text-sm md:text-base text-main/80 mt-2 max-w-sm">
                Our dentists have years of experience and are experts in their
                field.
              </p>

              <Image
                src="/experince.svg"
                alt="Experienced Team"
                width={250}
                height={250}
                className="absolute -right-4 -bottom-2 opacity-40"
              />
            </div>

            <div className="relative bg-button rounded-[30px] p-6 overflow-hidden">
              <h2
                className={`${robotoSlab.className} text-white text-lg font-bold`}
              >
                State-of-the-Art Facility
              </h2>

              <p className="text-sm text-white/80 mt-2">
                We use the latest technology and techniques to ensure the best
                care.
              </p>

              <Image
                src="/latest-tech.svg"
                alt="Latest Technology"
                width={250}
                height={250}
                className="absolute -right-6 -bottom-12 opacity-30"
              />
            </div>

            <div className="relative bg-[#f0e4d2e3] rounded-[30px] p-6 overflow-hidden">
              <h2
                className={`${robotoSlab.className} text-main text-lg font-bold`}
              >
                Personalized Care
              </h2>

              <p className="text-sm text-main/80 mt-2">
                We tailor our treatments to meet the unique needs of each
                patient.
              </p>

              <Image
                src="/personalized.svg"
                alt="Personalized Care"
                width={250}
                height={250}
                className="absolute -right-2 -bottom-6 opacity-30"
              />
            </div>
          </div>

          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-12 leading-tight">
            Our Doctors Have Earned Over Satisfaction From
            <br className="hidden md:block" />
            Their Patients After One Checkup!
          </h1>
        </div>
      </section>
    </div>
  );
}
