"use client";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const routeName = pathname.slice(1);
  return (
    <div className="w-full bg-primary text-white text-5xl text-center uppercase py-10 font-semibold">
      {routeName}
    </div>
  );
}
