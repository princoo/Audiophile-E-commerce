import Link from "next/link";
import React from "react";

import Button from "../ui/Button";
import { CartFooterProps } from "@/types/cart";

export default function CartFooter({
  total,
  handleCloseCart,
}: CartFooterProps) {
  return (
    <div className="border-t border-gray-secondary p-6 space-y-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-gray-secondary font-medium">TOTAL</span>
        <span className="text-lg font-bold">${total.toLocaleString()}</span>
      </div>
      <Link href="/checkout" onClick={handleCloseCart}>
        <Button size="large" variant="primary" className="w-[700px]">
          checkout
        </Button>
      </Link>
    </div>
  );
}
