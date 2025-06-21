'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { navItems } from "@/constants/navItems";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="px-16 bg-primary">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-6 border-b-1 border-gray-600 ">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
        <div>
          <ul className="flex gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.link;

              return (
                <li
                  key={item.idx}
                  className={`text-sm font-semibold transition-colors duration-400 ease-in-out ${
                    isActive
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <IoCartOutline
          size={20}
          className="text-white cursor-pointer hover:text-secondary transition-colors duration-400 ease-in-out"
        />
      </div>
    </div>
  );
}
