import Image from "next/image";
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
    <div className="flex bg-red400 justify-between items-center p-6 mx-10 border-b-2 border-red-400">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <div>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li
              key={item.idx}
              className="text-white hover:text-secondary font-semibold transition-colors duration-400 ease-in-out"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      < IoCartOutline />
    </div>
  );
}
