"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";
import Button from "../ui/Button";
import { OrderConfirmationModalProps } from "@/types/checkout";

export function OrderConfirmationModal({
  isOpen,
  onClose,
}: OrderConfirmationModalProps) {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const shipping = 50;
  const grandTotal = total + shipping;

  useEffect(() => {
    if (isOpen) {
      dispatch(clearCart());
    }
  }, [isOpen, dispatch]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const firstItem = items[0];
  console.log(grandTotal);
  const otherItemsCount = items.length - 1;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-6">
          <FiCheck size={32} className="text-white" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">
            thank you
            <span className="block">for the order</span>
          </h2>
          <p className="text-gray-secondary text-xs">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg overflow-hidden mb-6 flex">
          {firstItem && (
            <div className="p-6 bg-box-background">
              <div className="flex items-center gap-1">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={
                      firstItem.image || "/placeholder.svg"
                    }
                    alt={firstItem.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-xs uppercase">
                    {firstItem.name
                      .replace(" HEADPHONES", "")
                      .replace(" SPEAKER", "")}
                  </h3>
                  <p className="text-gray-secondary text-xs">
                    ${firstItem.price.toLocaleString()}
                  </p>
                </div>

                <span className="text-gray-secondary text-xs font-bold">
                  x{firstItem.quantity}
                </span>
              </div>

              {otherItemsCount > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-secondary">
                  <p className="text-gray-secondary text-xs text-center">
                    and {otherItemsCount} other item
                    {otherItemsCount > 1 ? "s" : ""}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="bg-primary text-white p-6">
            <div className="text-center">
              <p className="text-gray-secondary text-xs uppercase tracking-wider mb-2">
                grand total
              </p>
              <p className="text-white text-xs font-bold">
                ${grandTotal}
              </p>
            </div>
          </div>
        </div>

        <Link href="/" onClick={onClose}>
          <Button variant="primary" size="large">back to home</Button>
        </Link>
      </div>
    </div>
  );
}
