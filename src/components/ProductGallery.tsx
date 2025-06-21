import { Gallery } from "@/types/product";
import Image from "next/image";



interface ProductGalleryProps {
  gallery: Gallery;
}

export default function ProductGallery({ gallery }: ProductGalleryProps) {
  // Default layout assumes 3 images: 2 small on left, 1 large on right
  const {first, second, third} = gallery;

  return (
    <section className="bg-red-400">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column - Two stacked images */}
          <div className="grid grid-rows-2 gap-4 lg:gap-8">
            {/* Top Left Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={first.desktop || "/placeholder.svg?height=300&width=400"}
                alt={"Product image 1"}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={second.desktop || "/placeholder.svg?height=300&width=400"}
                alt={"Product image 2"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Large image */}
          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={third.desktop || "/placeholder.svg?height=300&width=400"}
                alt={"Product image 3"}
                fill
                className="object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
