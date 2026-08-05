import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Fahim Ahmed | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}