import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function YxOne() {
  return (
    <div className="flex gap-3 md:gap-10 mx-10">
      <Image
        src="/images/earphones-yx1.jpg"
        alt="YX1 Earphones"
        width={300}
        height={300}
        className="object-cover flex-1 rounded-lg"
      />
      <div className="bg-box-background rounded-lg flex-1 flex flex-col items-center justify-center px-5">
        <p className="font-bold text-3xl uppercase">zx7 Speaker</p>
        <Button variant="outline" size="medium" className="mt-10">
          see product
        </Button>
      </div>
    </div>
  );
}
