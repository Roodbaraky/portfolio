import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koorosh Roodbaraky",
  description: "My portfolio website",
  icons:["/assets/claypp2-removebg.ico"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon"  />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
