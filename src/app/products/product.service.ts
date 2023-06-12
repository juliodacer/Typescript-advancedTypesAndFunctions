import { Product } from './product.Model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const updateProduct = (id: string, changes: Product) => {
  // products.push(data)
};
