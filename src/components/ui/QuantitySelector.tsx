"use client";

import type React from "react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "./Button";

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, value));
    setQuantity(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className="flex gap-5">
      <div className="flex items-center bg-box-background text-black w-1/3">
        <button
          onClick={handleDecrease}
          disabled={quantity <= min}
          className=" flex justify-center flex-1 hover:text-secondary cursor-pointer hover:bg-gray-secondary py-3 disabled:opacity-50 shrink"
        >
          <FiMinus />
        </button>

        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="shrink flex-1  text-center bg-transparent border-none outline-none font-semibold text-gray-900"
        />

        <button
          onClick={handleIncrease}
          disabled={quantity >= max}
          className=" flex justify-center flex-1 hover:text-secondary cursor-pointer hover:bg-gray-secondary py-3 disabled:opacity-50 shrink"
        >
          <FiPlus />
        </button>
      </div>
      <Button>add to cart</Button>
    </div>
  );
}
