import Image from "next/image";
import Button from "./ui/Button";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: { mobile: string; tablet: string; desktop: string };
  isNew?: boolean;
  imagePosition?: "left" | "right";
}

export default function ProductCard({
  name,
  description,
  image,
  isNew = false,
  imagePosition = "left",
}: ProductCardProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className={`flex justify-center ${
              imagePosition === "right"
                ? "order-1 lg:order-2"
                : "order-1 lg:order-1"
            }`}
          >
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-200 rounded-lg p-8 lg:p-12">
                <Image
                  src={image.desktop || "/placeholder.svg"}
                  alt={name}
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
                  NEW PRODUCT
                </p>
              )}

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight uppercase">
                {name}
              </h2>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <Button>SEE PRODUCT</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
