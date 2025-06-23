export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  itemCount: number;
}
export interface CartFooterProps {
  total: number;
  handleCloseCart: () => void;
}
export interface CartItemProps {
  item: CartItem;
  handleUpdateQuantity: (id: string, quantity: number) => void;
}
export interface CartHeaderProps {
  itemCount: number;
  handleClearCart: () => void;
}