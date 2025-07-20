"use client";

import { navItems } from "@/data/navigation";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { Button } from "../ui/button";
import ContactButton from "./ContactButton";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center cursor-pointer">
        <CiMenuFries className="text-[24px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-10 mb-32 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold">
              Eko Listiyono <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`
            ${item.href === pathName && "text-accent border-b-2"}
            border-accent capitalize font-medium hover:text-accent-hover transition-all`}
            >
              {item.label}
            </Link>
          ))}
          <ContactButton />
        </nav>
      </SheetContent>
      <SheetTitle>
        <VisuallyHidden>Navigation</VisuallyHidden>
      </SheetTitle>
    </Sheet>
  );
};

export default MobileNav;
