const productos = [];

class Producto {
  constructor(titulo, precio) {
    this.title = titulo;
    this.price = precio;
  }
}

module.exports = { Producto, productos };