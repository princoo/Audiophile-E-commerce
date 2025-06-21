interface ProductDetailsProps {
  features: string;
  inTheBox: {
    quantity: number;
    item: string;
  }[];
}

export default function ProductDetails({
  features,
  inTheBox,
}: ProductDetailsProps) {
  return (
    <section className="mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex gap-32">
          <div className="space-y-6 lg:space-y-8 flex-2">
            <h2 className="text-3xl font-bold uppercase tracking-wide">
              features
            </h2>
            <div className="space-y-6">
              <p className="text-gray-secondary leading-relaxed">{features}</p>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 flex-1">
            <h2 className="text-3xl font-bold uppercase tracking-wide">
              in the box
            </h2>

            <ul className="space-y-3">
              {inTheBox.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-secondary font-bold ">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-secondary">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
