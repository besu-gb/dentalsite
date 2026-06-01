import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Fredoka, Roboto_Slab } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dentalcare | Modern Smile Studio",
  description:
    "A creative, conversion-focused dental website designed to turn social traffic and referrals into booked consultations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${fredoka.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
