import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import { slugify } from "@/lib/utils/slugify";
import { Product } from "@/types/product";
import ProductActions from "./ProductActions";
import NavigateBack from "./NavigateBack";

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
  imagePosition?: "left" | "right";
  showDetails: boolean;
}

export default function ProductCard({
  product,
  isNew = false,
  imagePosition = "left",
  showDetails,
}: ProductCardProps) {
  return (
    <section className="py-16 lg:py-24">
      
      <div className="container mx-auto px-4 lg:px-8">
        <NavigateBack/>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`flex justify-center ${
              imagePosition === "right"
                ? "order-1 lg:order-2"
                : "order-1 lg:order-1"
            }`}
          >
            <div className="relative w-full max-w-lg">
              <div className="bg-box-background rounded-lg p-8 lg:p-12">
                <Image
                  src={product.image.desktop || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 lg:space-y-8 ${
              imagePosition === "right"
                ? "order-2 lg:order-1"
                : "order-2 lg:order-2"
            }`}
          >
            <div className="space-y-4 lg:space-y-6">
              {isNew && (
                <p className="text-secondary text-sm lg:text-base tracking-[0.5em] uppercase font-light">
                  new product
                </p>
              )}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight uppercase">
                {product.name}
              </h2>
              <p className="text-gray-secondary text-base lg:text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {showDetails ? (
              <>
                <p className="font-semibold text-lg">{`$ ${product.price}`}</p>
                <ProductActions product={product}/>
              </>
            ) : (
              <Button>
                <Link href={`/headphones/${slugify(product.slug)}`}>See Product</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
