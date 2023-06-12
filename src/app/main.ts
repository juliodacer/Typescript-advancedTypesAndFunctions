import { faker } from '@faker-js/faker';
import { addProduct, updateProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr({ width: 128, height: 128 }),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    color: faker.internet.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    categoryId: faker.string.uuid()
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
})
