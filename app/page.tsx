"use client";
import Header from "@/components/header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = window.sessionStorage.getItem("jwt");
    if (!token) {
      router.push("/signin");
    }
  }, []);
  return (
    <main className="flex flex-col min-h-screen bg-gradient-page">
      <Header />
      <div className="w-screen flex flex-1 justify-center items-center ">
        <div className="flex w-full flex-wrap justify-center capitalize text-2xl">
          <Link
            className="shadow-md rounded-md border h-fit p-5 mx-3 bg-white my-3 min-w-[200px] text-center font-semibold"
            href="/"
          >
            Products
          </Link>
          <Link
            className="shadow-md rounded-md border h-fit p-5 mx-3 bg-white my-3 min-w-[200px] text-center font-semibold"
            href="/"
          >
            brands
          </Link>
          <Link
            className="shadow-md rounded-md border h-fit p-5 mx-3 bg-white my-3 min-w-[200px] text-center font-semibold"
            href="/"
          >
            categories
          </Link>
          <Link
            className="shadow-md rounded-md border h-fit p-5 mx-3 bg-white my-3 min-w-[200px] text-center font-semibold"
            href="/"
          >
            orders
          </Link>
          <Link
            className="shadow-md rounded-md border h-fit p-5 mx-3 bg-white my-3 min-w-[200px] text-center font-semibold"
            href="/"
          >
            users
          </Link>
        </div>
      </div>
    </main>
  );
}
