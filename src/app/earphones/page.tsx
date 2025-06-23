import ProductsList from "@/components/ProductList";
import { getProducts } from "@/lib/filterProducts";

export default function Headphones() {
  const products = getProducts("earphones");
  return <ProductsList products={products} />;
}
