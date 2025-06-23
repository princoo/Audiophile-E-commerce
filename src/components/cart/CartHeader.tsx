import { CartHeaderProps } from "@/types/cart";
import React from "react";

export default function CartHeader({
  itemCount,
  handleClearCart,
}: CartHeaderProps) {
  return (
    <div className="flex pt-6 justify-between items-center">
      <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
        CART ({itemCount})
      </h3>
      <button
        onClick={handleClearCart}
        className="text-gray-secondary hover:text-secondary text-sm underline transition-colors duration-300 ease-in-out cursor-pointer"
      >
        Remove All
      </button>
    </div>
  );
}
