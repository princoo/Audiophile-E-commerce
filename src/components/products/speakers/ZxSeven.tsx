import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function ZxSeven() {
  return (
    <div className="relative mx-10 rounded-lg overflow-hidden">
      <Image
        src="/images/speaker-zx7.jpeg"
        alt="ZX7 Speaker"
        fill
        sizes="100vw"
        className="object-cover w-full h-full"
      />
      <div className="py-24 pl-6 md:p-24 relative">
        <p className="font-bold text-3xl uppercase">zx7 Speaker</p>
        <Button variant="outline" size="medium" className=" mt-10">
          see product
        </Button>
      </div>
    </div>
  );
}
