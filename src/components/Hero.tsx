import Button from "./ui/Button";

export default function Hero() {
  return (
    <div
      className="max-w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/image-hero.jpeg')",
      }}
    >
      <div className="flex flex-col text-white w-1/2 pt-48 pl-16">
        <p className="tracking-[10px]  let font-semibold text-lg uppercase text-text-secondary">
          new product
        </p>
        <p className="text-6xl font-bold uppercase mt-4">
          xx99 mark ii headphones
        </p>
        <p className="mt-6 text-text-secondary">
          Experience natural, lifelike audio and exceptional <br /> build
          quality made for the passionate music enthusiast.
        </p>
        <Button variant="primary" size="medium" className="max-w-1/2 mt-10">
          see product
        </Button>
      </div>
    </div>
  );
}
