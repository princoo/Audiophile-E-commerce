import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="space-y-0">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
          isNew={product.new}
          imagePosition={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}
