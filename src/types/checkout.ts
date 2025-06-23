export interface CheckoutFormData {
  // Billing Details
  name: string
  email: string
  phone: string

  // Shipping Info
  address: string
  zipCode: string
  city: string
  country: string

  // Payment Details
  paymentMethod: "e-money" | "cash"
  eMoneyNumber?: string
  eMoneyPin?: string
}

export interface OrderSummaryItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}
