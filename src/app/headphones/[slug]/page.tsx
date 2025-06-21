import ProductCard from "@/components/ProductCard";
import ProductDetails from "@/components/ProductDetails";
// import ProductGallery from "@/components/ProductGallery";
import { getProductBySlug, getProducts } from "@/lib/filterProducts";
import React from "react";

export async function generateStaticParams() {
  const products = getProducts("headphones");

  return products.map((product) => ({
    slug: product.slug,
  }));
}
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <ProductCard
        key={product.id}
        product={product}
        isNew={product.new}
        imagePosition="left"
        showDetails={true}
      />
      <ProductDetails
        features={product.features}
        inTheBox={product.includedItems}
      />
      {/* <ProductGallery gallery={product.gallery} /> */}
    </div>
  );
}
