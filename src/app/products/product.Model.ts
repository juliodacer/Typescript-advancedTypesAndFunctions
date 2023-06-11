import { Category } from "../category/category.mode";

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string | number;
  title: string;
  creatredAt: Date;
  stock: number;
  size?: Sizes;
  category: Category
}
