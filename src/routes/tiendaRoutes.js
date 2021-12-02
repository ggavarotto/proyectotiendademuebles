const express = require('express');

/* hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion*/
const routes = express.Router();

const { renderHome, getAllProducts, getForm, addnewProduct } = require('../controllers/tiendaControllers');

routes.get("/", renderHome);

//http://localhost:3000/tienda/prueba
routes.get("/prueba", (req, res) => { res.send("esta es otra peticion") });

//routes.get("/productos", (req, res) => { res.send("Linkeado con ¡productos!") });
routes.get("/productos", getAllProducts);

routes.get("/nuevoProducto", getForm);

routes.post("/nuevoProducto",addnewProduct);

module.exports = routes;