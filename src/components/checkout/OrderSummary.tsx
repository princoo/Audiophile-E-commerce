"use client";

import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import Button from "../ui/Button";

interface OrderSummaryProps {
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export function OrderSummary({ onSubmit, isSubmitting }: OrderSummaryProps) {
  const { items, total } = useAppSelector((state) => state.cart);

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 h-fit">
      <h2 className="text-lg font-bold text-black uppercase tracking-wider mb-8">
        summary
      </h2>

      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="w-16 h-16 bg-box-background rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image || "/placeholder.svg?height=64&width=64"}
                alt={item.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-xs uppercase">
                {item.name.replace(" HEADPHONES", "").replace(" SPEAKER", "")}
              </h3>
              <p className="text-gray-secondary text-xs">
                ${item.price.toLocaleString()}
              </p>
            </div>

            <span className="text-gray-secondary text-sm font-bold">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-8 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-secondary">TOTAL</span>
          <span className="font-bold text-black">
            ${total.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-secondary">SHIPPING</span>
          <span className="font-bold text-gray-black">${shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-secondary">VAT (INCLUDED)</span>
          <span className="font-bold text-gray-black">
            ${vat.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-gray-secondary">GRAND TOTAL</span>
          <span className="font-bold text-secondary text-sm">
            ${grandTotal.toLocaleString()}
          </span>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={isSubmitting}
        variant="primary"
        size="large"
        className="text-xs"
      >
        {isSubmitting ? "PROCESSING..." : "CONTINUE & PAY"}
      </Button>
    </div>
  );
}
