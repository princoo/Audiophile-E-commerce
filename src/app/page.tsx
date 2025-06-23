import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/products/Products";
import Recommendation from "@/components/Recommendation";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Recommendation />
        <Products />
        <About />
      </div>
    </div>
  );
}
