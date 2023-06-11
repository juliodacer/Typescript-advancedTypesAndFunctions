import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'p2',
  creatredAt: new Date(),
  stock: 90,
  category: {
    id: 1,
    name: 'AAA'
  }
});
