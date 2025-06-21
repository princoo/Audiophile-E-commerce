import ProductsList from "@/components/ProductList";
import { getProducts } from "@/lib/filterProducts";

export default function Headphones() {
  const products = getProducts("headphones");
  return <ProductsList products={products} />;
}
