import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="space-y-0">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          isNew={product.new}
          imagePosition={index % 2 === 0 ? "left" : "right"}
          showDetails={false}
        />
      ))}
    </div>
  );
}
