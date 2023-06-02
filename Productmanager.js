class ProductManager {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log('Error: Todos los campos son obligatorios');
      return;
    }

    if (this.products.some(p => p.code === product.code)) {
      console.log('Error: El código del producto ya existe');
      return;
    }

    product.id = this.nextProductId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return product;
    } else {
      console.log('Not found');
    }
  }
}


const manager = new ProductManager();

// Agregar productos
manager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 10.99,
  thumbnail: 'ruta/imagen1.jpg',
  code: 'P001',
  stock: 5
});

manager.addProduct({
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 19.99,
  thumbnail: 'ruta/imagen2.jpg',
  code: 'P002',
  stock: 8
});

// Obtener todos los productos
const products = manager.getProducts();
console.log(products);

// Obtener producto por id
const product = manager.getProductById(1); // Suponiendo que el id 1 existe
console.log(product);

const nonExistentProduct = manager.getProductById(3); // Suponiendo que el id 3 no existe, mostrará "Not found"
