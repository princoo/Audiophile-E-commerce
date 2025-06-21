import About from "@/components/About"
import Recommendation from "@/components/Recommendation"


export default function HeadphonesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <main>{children}</main>
      <Recommendation />
      <About />
    </div>
  )
}
