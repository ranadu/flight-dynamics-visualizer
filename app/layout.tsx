import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Dynamics Visualizer",
  description: "Interactive projectile trajectory simulator built with Next.js, TypeScript, Tailwind CSS, and Recharts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}