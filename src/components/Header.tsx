// src/components/Header.tsx
import React from "react";
import Nav from "./navigation/Nav";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./navigation/MobileNav";

const Header: React.FC = () => {
  return (
    <header className="py-4 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">
            Eko Listiyono <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Contact me</Button>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <div className="xl:hidden flex">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
