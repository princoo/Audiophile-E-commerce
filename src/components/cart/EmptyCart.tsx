import { IoCartOutline } from "react-icons/io5";

export default function EmptyCart() {
  return (
    <div className="text-center pt-6">
      <p className="text-gray-secondary mb-4 text-xs font-bold">Your cart is empty</p>
      <IoCartOutline size={48} className="text-black mx-auto mb-4" />
    </div>
  );
}
