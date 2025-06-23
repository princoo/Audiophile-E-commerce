// 'use client'

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { navItems } from "@/constants/navItems";
// import { usePathname } from "next/navigation";
// import { CartIcon } from "./cart/CartIcon";
// import { CartDropdown } from "./cart/CartDropDown";

// export default function Navbar() {
//   const pathname = usePathname();

//   return (
//     <div className="px-16 bg-primary">
//       <div className="max-w-[1240px] mx-auto flex justify-between items-center p-6 border-b-1 border-gray-600 ">
//         <Image src="/logo.svg" width={100} height={100} alt="Logo" />
//         <div>
//           <ul className="flex gap-10">
//             {navItems.map((item) => {
//               const isActive = pathname === item.link;

//               return (
//                 <li
//                   key={item.idx}
//                   className={`text-sm font-semibold transition-colors duration-400 ease-in-out ${
//                     isActive
//                       ? "text-secondary"
//                       : "text-white hover:text-secondary"
//                   }`}
//                 >
//                   <Link href={item.link}>{item.name}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <CartIcon />
//         <CartDropdown />
//       </div>
//     </div>
//   );
// }


"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi"
import { navItems } from "@/constants/navItems"
import { CartIcon } from "./cart/CartIcon"
import { CartDropdown } from "./cart/CartDropDown"
// import Recommendation from "./Recommendation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="px-4 md:px-16 bg-primary">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-6 border-b-1 border-gray-600">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.link

              return (
                <li
                  key={item.idx}
                  className={`text-sm font-semibold transition-colors duration-400 ease-in-out ${
                    isActive ? "text-secondary" : "text-white hover:text-secondary"
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <CartIcon />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-b border-gray-secondary">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.link

              return (
                <li key={item.idx}>
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-semibold transition-colors duration-400 ease-in-out ${
                      isActive ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        // <Recommendation />
      )}

      <CartDropdown />
    </div>
  )
}
