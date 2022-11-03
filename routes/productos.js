const router = require("express").Router();
const { Producto, productos } = require("../productosClase.js");

router.get("/productos", (req, res) => {
  res.json({ productos });
});

router.get("/productos/:id", (req, res) => {
  let producto = productos.find(
    (producto) => producto.id === Number(req.params.id)
  );
  producto
    ? res.send(producto)
    : res.status(404).send({ error: "Producto sin stock" });
});

router.post("/productos", (req, res) => {
  let { titulo, precio } = req.body;
  const producto = { titulo, precio};
  producto.id = productos.length + 1;
  productos.push(producto);
  res.send(productos);
});

router.put("/productos/:id", (req, res) => {
  let { titulo, precio } = req.body;
  let posIndex = productos.findIndex(
    (producto) => producto.id === Number(req.params.id)
  );
  if (posIndex >= 0) {
    productos[posIndex] = { titulo, precio };
    productos[posIndex].id = Number(req.params.id);
    res.send(productos[posIndex]);
  } else {
    res.status(404).send({ error: "Producto no esta subido" });
  }
});

router.delete("/productos/:id", (req, res) => {
  let pos = productos.findIndex(
    (producto) => producto.id === Number(req.params.id)
  );
  pos >= 0
    ? productos.splice(pos, 1) && res.send({ message: "Producto eliminado" })
    : res.status(404).send({ error: "Product no pudo eliminarse" });
});

module.exports = router;