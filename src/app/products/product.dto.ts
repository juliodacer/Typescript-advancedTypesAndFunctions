import { Product } from "./product.Model";

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
