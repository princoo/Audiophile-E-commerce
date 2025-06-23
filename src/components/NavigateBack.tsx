"use client";

import { useRouter } from "next/navigation";
export default function NavigateBack() {
  const router = useRouter();

  return (
    <p
      onClick={() => router.back()}
      className="text-sm mb-5 text-gray-secondary border-transparent border-b-1 hover:text-black hover:border-b-1 hover:border-gray-secondary cursor-pointer max-w-[60px]"
    >
      Go back
    </p>
  );
}
