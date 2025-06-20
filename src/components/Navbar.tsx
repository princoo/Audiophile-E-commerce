import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  const navItems = [
    {
      idx: 0,
      name: "HOME",
      link: "#",
    },
    {
      idx: 1,
      name: "HEADPHONE",
      link: "#",
    },
    {
      idx: 2,
      name: "SPEAKERS",
      link: "#",
    },
    {
      idx: 3,
      name: "EARPHONES",
      link: "#",
    },
  ];
  return (
    <div className=" px-16 bg-primary">
      <div className="flex justify-between items-center p-6 border-b-1 border-gray-600">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
        <div>
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li
                key={item.idx}
                className="text-white text-sm hover:text-secondary font-semibold transition-colors duration-400 ease-in-out"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
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
