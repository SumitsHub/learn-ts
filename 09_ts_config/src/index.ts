interface Product {
  name: string;
  price: number;
}

const printProduct = (product: Product) => {
  console.log(`Product ${product.name} costs $${product.price}`);
};
