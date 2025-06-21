import { products } from "@/constants/dataSource";
export const getProducts = (category: string) => {
  return products.filter((product) => product.category === category);
};
export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};
