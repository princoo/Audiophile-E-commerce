import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ZxNine() {
  return (
    <div
      className="bg-secondary flex flex-col xl:flex-row justify-center items-center gap-32 pt-20 mt-[119px] mx-10 rounded-lg"
      style={{
        backgroundImage: "url('/pattern-circles.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      <Image
        src="/images/speaker-zx9.png"
        alt="ZX9 Speaker"
        width={384}
        height={384}
        className="w-44 xl:w-[400px] xl:h-[500px] object-cover"
      />
      <div className="flex flex-col text-white max-w-[300px] gap-8 text-center xl:text-start">
        <h1 className="text-6xl font-bold uppercase tracking-widest">
          ZX9 Speaker
        </h1>
        <p className="text-gray-secondary ">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variant="secondary" size="medium" className="mt-10">
          see product
        </Button>
      </div>
    </div>
  );
}
