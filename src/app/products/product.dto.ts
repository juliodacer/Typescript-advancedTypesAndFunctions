import { Product } from "./product.Model";

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>