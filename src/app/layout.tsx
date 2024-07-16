import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { League_Spartan } from "next/font/google";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league_spartan",
});
export const metadata: Metadata = {
  title: "Koorosh Roodbaraky",
  description: "My portfolio website",
  icons: ["/assets/claypp2-removebg.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${league_spartan.variable}`}>
      <body className={inter.className}>
          <Navbar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
