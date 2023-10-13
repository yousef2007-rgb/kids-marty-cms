import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { Cairo } from "next/font/google";
import Navigation from "@/components/navigation";

const roboto: any = Cairo({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-page flex flex-col font-sans`}
      >
        <Header />
        <div className="flex-1 flex w-[90vw] py-5 max-w-5xl mx-auto">
          <Navigation />
          <div className="flex-1 flex flex-col ml-5 py-3 ">{children}</div>
        </div>
      </body>
    </html>
  );
}