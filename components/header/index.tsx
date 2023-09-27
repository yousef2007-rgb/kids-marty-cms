import React from "react";
import PersonIcon from "../../public/assets/icons/personIcon";
import MenuIcon from "@/public/assets/icons/menuIcon";
import Link from "next/link";

export default function index() {
  return (
    <header className="flex justify-between items-center px-5 py-5 max-w-5xl mx-auto w-screen">
      {/* <h1 className="font-bold text-3xl">CMS</h1> */}
      <img
        className="w-16"
        src="/assets/images/logo.png"
        alt="kids marty logo"
      />
      <div className="flex">
        <Link href="/auth" className="mx-2">
          <PersonIcon />
        </Link>
        <button className="mx-2">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
