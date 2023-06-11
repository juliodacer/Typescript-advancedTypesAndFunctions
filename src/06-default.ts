export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}

const p = createProduct('1')
