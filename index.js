const express = require("express");
const productos = require("./routes/productos.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", productos);

const server = app.listen(PORT, () =>
  console.log(`Server:${PORT} `)
);
server.on("error", (errors) => console.log(`Errors are: ${errors}`));