import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    title: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr({ width: 128, height: 128 }),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    color: faker.internet.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
