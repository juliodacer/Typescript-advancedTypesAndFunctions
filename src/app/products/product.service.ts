import { faker } from '@faker-js/faker';
import { Product } from './product.Model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductsDto,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'], // acceder al tipado por índice
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
    createdAt: faker.date.recent(),
  };
  return products[index];
};

export const findProducts = (dto: FindProductsDto): Product[] => {
  // dto.tags = []
  // dto.tags?.push('t')

  return products;
};
