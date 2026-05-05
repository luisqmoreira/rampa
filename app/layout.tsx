import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
