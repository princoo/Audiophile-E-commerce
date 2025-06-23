"use client";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeCart, updateQuantity, clearCart } from "@/store/slices/cartSlice";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import toast from "react-hot-toast";

export function CartDropdown() {
  const dispatch = useAppDispatch();
  const { items, isOpen, total, itemCount } = useAppSelector(
    (state) => state.cart
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  //close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dispatch(closeCart());
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
        toast.success("Cart is empty");

  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 bg-opacity-25" />
      <div
        ref={dropdownRef}
        className="absolute top-20 right-4 lg:right-48 w-96 bg-white rounded-lg shadow-xl"
      >
        <div className="px-6 pb-4">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="space-y-6">
              <CartHeader
                itemCount={itemCount}
                handleClearCart={handleClearCart}
              />
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <CartFooter total={total} handleCloseCart={handleCloseCart} />
        )}
      </div>
    </div>
  );
}
