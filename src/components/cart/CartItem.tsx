import { CartItemProps } from "@/types/cart";
import Image from "next/image";
import { QuantitySelector } from "../ui/QuantitySelector";

export default function CartItem({
  item,
  handleUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.image || "/placeholder.svg?height=64&width=64"}
          alt={item.name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm uppercase truncate">
          {item.name.replace(" HEADPHONES", "").replace(" SPEAKER", "")}
        </h4>
        <p className="text-gray-600 text-sm">${item.price.toLocaleString()}</p>
      </div>

      <QuantitySelector
        initialValue={item.quantity}
        onChange={(nbr) => handleUpdateQuantity(item.id, nbr)}
      />
    </div>
  );
}
