import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; 

export const metadata: Metadata = {
  title: "Oğuzhan Demirkaya",
  description: "Personal Portfolio",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
