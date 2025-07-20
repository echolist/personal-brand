// src/components/Header.tsx
"use client";

import { navItems } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav: React.FC = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`
            ${item.href === pathName && "text-accent border-b-2"}
            border-accent capitalize font-medium hover:text-accent-hover`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
