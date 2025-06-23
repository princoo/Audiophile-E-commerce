"use client";
import { useState } from "react";
import Button from "./ui/Button";
import { QuantitySelector } from "./ui/QuantitySelector";
import { Product } from "@/types/product";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import toast from "react-hot-toast";

interface ProductActionsProps {
  product: Product;
}
export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    dispatch(
      addItem({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.image.desktop,
        slug: product.slug,
        quantity,
      })
    );
    toast.success(`Item '${product.name}' was added to cart`);
  };
  return (
    <div className="flex gap-5">
      <QuantitySelector initialValue={quantity} onChange={setQuantity} />
      <Button onClick={handleAddToCart}>add to cart</Button>
    </div>
  );
}
