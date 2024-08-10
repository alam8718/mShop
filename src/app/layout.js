"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

const outfit = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const params = usePathname();
  const showHeader = params === "/sign-in" || params === "/create-account" ? true : false

  return (
    <html lang="en">
      <body className={outfit.className}>
        {!showHeader && <Header />}
        <Toaster />
        {children}</body>
    </html>
  );
}
