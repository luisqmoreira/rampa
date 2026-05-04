import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rampa Labs | Automation Systems for Growing SMEs",
  description:
    "Rampa Labs builds practical automation systems, dashboards, and workflows for marketplace sellers, property firms, and operationally heavy SMEs.",
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
    title: "Rampa Labs | Automation Systems for Growing SMEs",
    description:
      "Practical automation systems, dashboards, and workflows for operationally heavy SMEs.",
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
