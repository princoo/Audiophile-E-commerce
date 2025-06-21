import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

export default function Recommendation() {
  const recommendations = [
    {
      idx: 0,
      title: "headphones",
      image: "/images/image-headphones.png",
      href: "/headphones",
    },
    {
      idx: 1,
      title: "speakers",
      image: "/images/image-speakers.png",
      href: "/speakers",
    },
    {
      idx: 2,
      title: "earphones",
      image: "/images/image-earphones.png",
      href: "/earphones",
    },
  ];
  return (
    <div className="flex gap-20 sm:gap-6 w-full px-5 md:px-10 flex-col  sm:flex-row mt-52">
      {recommendations.map((item) => (
        <div
          key={item.idx}
          className="cursor-pointer group flex-1 shrink bg-box-background px-2 sm:px-8 pt-24 pb-5 rounded-md relative"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={400}
            className="w-32 h-32 object-cover absolute -top-14 left-1/2 transform -translate-x-1/2"
          />
          <div className="text-center uppercase relative">
            <p className="font-semibold">headphones</p>
            <p className="text-sm font-medium group-hover:text-secondary transition-colors duration-300 flex items-center justify-center gap-2 mt-2">
              <span>shop</span>
              <FaAngleRight className="text-secondary" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
