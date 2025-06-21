interface ProductImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: ProductImageSet;
  second: ProductImageSet;
  third: ProductImageSet;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: ProductImageSet;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: ProductImageSet;
  cartImage: string;
  category: string;
  categoryImage: ProductImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: IncludedItem[];
  gallery: Gallery;
  others: OtherProduct[];
}
