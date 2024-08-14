"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";
import { GlobalProvider } from "@/components/_context/GlobalContext";


const outfit = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const params = usePathname();
  const showHeader = params === "/sign-in" || params === "/create-account" || params === "/success" || params === "/cancel" ? true : false

  return (
    <html lang="en">

      <body className={outfit.className}>
        <GlobalProvider>
          {!showHeader && <Header />}
          <Toaster />
          {children}
        </GlobalProvider>
      </body>
    </html >
  );
}
