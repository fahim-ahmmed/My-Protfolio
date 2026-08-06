import "./globals.css";

import Providers from "@/components/providers/ThemeProvider";

export const metadata = {
  title: {
    default: "Fahim Ahmed | Frontend Developer",
    template: "%s | Fahim Ahmed",
  },

  description:
    "Frontend Developer specializing in Next.js, React.js and Tailwind CSS.",

  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "JavaScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Fahim Ahmed",
    },
  ],

  creator: "Fahim Ahmed",

  openGraph: {
    title: "Fahim Ahmed",

    description:
      "Modern Frontend Developer Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        <Providers>

          {children}

        </Providers>

      </body>
    </html>
  );
}