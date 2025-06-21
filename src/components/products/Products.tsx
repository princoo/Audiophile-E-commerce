import React from 'react'
import ZxNine from "./speakers/ZxNine"
import ZxSeven from "./speakers/ZxSeven"
import YxOne from "./earphones/YxOne"

export default function Products() {
  return (
    <div className="flex flex-col gap-20">
    <ZxNine />
    <ZxSeven />
    <YxOne />
    </div>
  )
}
