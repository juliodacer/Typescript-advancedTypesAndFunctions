type Sizes = 'S' | 'M' | 'L' | 'XL'
// type Product = {
//   id: string | number
//   title: string,
//   creatredAt: Date,
//   stock: number,
//   size?: Sizes
// }

interface Product {
  id: string | number
  title: string,
  creatredAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = []

products.push({
  id: 1,
  title: 'p2',
  creatredAt: new Date(),
  stock: 90
})

