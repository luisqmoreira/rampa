import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rampa Labs | Stop running your business from spreadsheets",
  description:
    "Operator-led automation systems, dashboards, and workflows for SMEs that have outgrown spreadsheets.",
  keywords: [
    "SME automation",
    "workflow automation",
    "automated reporting",
    "operations automation",
    "Amazon seller automation",
    "marketplace seller reporting",
    "property management automation",
    "spreadsheet automation",
    "business process automation",
  ],
  openGraph: {
    title: "Rampa Labs | Stop running your business from spreadsheets",
    description:
      "Operator-led automation systems, dashboards, and workflows for SMEs that have outgrown spreadsheets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${interTight.variable} ${sourceSerif.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
