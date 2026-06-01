import Link from "next/link";
import { robotoSlab } from "@/app/layout";

const socialLinks = [
  { icon: "facebook-f", label: "Facebook" },
  { icon: "instagram", label: "Instagram" },
  { icon: "linkedin-in", label: "LinkedIn" },
  { icon: "tiktok", label: "TikTok" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-2">
      <div className="mx-auto max-w-7xl rounded-[34px] border-[3px] border-main bg-[#10263f] p-6 text-white shadow-[12px_12px_0_#10263f] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white/75">
              Dentalcare
            </p>

            <h2
              className={`${robotoSlab.className} mt-5 text-4xl font-bold leading-tight sm:text-5xl`}
            >
              Dentalcare.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              A stronger digital front door builds trust fast. This design keeps
              the brand memorable, premium, and action-focused.
            </p>
          </div>

          <div>
            <h3 className={`${robotoSlab.className} text-2xl font-bold`}>
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/75">
              <p>123 Dental Street, Smile City</p>
              <p>(123) 456-7890</p>
              <p>info@dentalcare.com</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <i className={`fab fa-${social.icon}`} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${robotoSlab.className} text-2xl font-bold`}>
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px bg-white/10" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              <i className="fas fa-tooth text-lg" />
            </span>
            <p className={`${robotoSlab.className} text-3xl font-bold`}>
              Dentalcare
            </p>
          </div>

          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} Dentalcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
