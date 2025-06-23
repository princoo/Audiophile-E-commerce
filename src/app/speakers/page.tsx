import ProductsList from "@/components/ProductList";
import { getProducts } from "@/lib/filterProducts";

export default function Headphones() {
  const products = getProducts("speakers");
  return <ProductsList products={products} />;
}
