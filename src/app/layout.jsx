import "./globals.css";
import Providers from "@/components/providers/ThemeProvider";

export const metadata = {
  title: {
    default: "Md Fahim Ahammed Shihab | Full-Stack Web Developer",
    template: "%s | Md Fahim Ahammed Shihab",
  },

  description:
    "Full-Stack Web Developer specializing in Next.js, React.js, Node.js, Express, MongoDB, and Tailwind CSS.",

  keywords: [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Md Fahim Ahammed Shihab",
    "Fahim Developer Portfolio",
    "JavaScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Md Fahim Ahammed Shihab",
      url: "https://github.com/fahim-ahmmed",
    },
  ],

  creator: "Md Fahim Ahammed Shihab",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    title: "Md Fahim Ahammed Shihab | Full-Stack Web Developer",
    description:
      "Modern Full-Stack Web Developer Portfolio specializing in MERN & Next.js ecosystem.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}