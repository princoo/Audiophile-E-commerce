import About from "@/components/About"
import Recommendation from "@/components/Recommendation"


export default function HeadphonesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <main>{children}</main>
      <Recommendation />
      <About />
    </div>
  )
}
