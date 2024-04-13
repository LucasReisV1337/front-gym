import { Inter } from "next/font/google";
import "./globals.css";
import HeaderOrganism from "@/components/organisms/HeaderOrganism";
import FooterOrganism from "@/components/organisms/FooterOrganism";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <HeaderOrganism />
      {children}
      <FooterOrganism />
    </div>
  );
}
