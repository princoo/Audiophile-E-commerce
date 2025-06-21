import Image from "next/image";

export default function About() {
  return (
    <section className=" py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/best-gear.jpeg"
                alt="Person wearing headphones with geometric background"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 lg:text-start text-center">
            <h2 className="text-4xl font-bold text-black leading-tight ">
              BRINGING YOU THE <span className="text-secondary">BEST</span>
              <span className="block">AUDIO GEAR</span>
            </h2>

            <p className="text-gray-secondary text-base lg:text-lg leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
