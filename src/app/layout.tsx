import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamaleshpro.com"),
  title: "Kamlesh Mishra — Senior Frontend Developer | React, Next.js & Angular",
  description:
    "Senior Frontend Developer with 11+ years of experience building fast, scalable web apps in React, Next.js, and Angular. Available for freelance projects.",
  keywords: [
    "frontend developer",
    "react developer",
    "angular developer",
    "next.js developer",
    "freelance developer",
    "Kamlesh Mishra",
  ],
  openGraph: {
    title: "Kamlesh Mishra — Senior Frontend Developer",
    description:
      "11+ years building fast, scalable web apps in React, Next.js, and Angular. Available for freelance projects.",
    url: "https://kamaleshpro.com",
    siteName: "kamaleshpro.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamlesh Mishra — Senior Frontend Developer",
    description:
      "11+ years building fast, scalable web apps in React, Next.js, and Angular.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
