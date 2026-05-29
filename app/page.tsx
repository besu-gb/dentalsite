import Image from "next/image";
import Link from "next/link";
import { robotoSlab } from "./layout";

export default function Home() {
  return (
    <>
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
              <h1 className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}>
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
              <h1 className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}>
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
              <h1 className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}>
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
              <h1 className={`${robotoSlab.className} text-main text-[2rem] font-bold leading-tight`}>
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
    </>
  );
}
