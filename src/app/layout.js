import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "mShop",
  description: "Shop Unlimiited!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}</body>
    </html>
  );
}
