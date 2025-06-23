"use client";

import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart } from "@/store/slices/cartSlice";

export function CartIcon() {
  const dispatch = useAppDispatch();
  const itemCount = useAppSelector((state) => state.cart.itemCount);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="relative">
      <div
        onClick={handleToggleCart}
        className="relative text-white hover:text-secondary transition-colors p-2 cursor-pointer"
      >
        <FiShoppingCart size={20} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
}
