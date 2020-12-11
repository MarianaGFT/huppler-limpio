import React from "react";
import Product from "./Product";

const Car = ({ car, agregarProducto }) => (
  <div>
    <h2>Carrito de compras</h2>
    {car.length === 0 ? (
      <p>No hay elementos en el carrito</p>
    ) : (
      car.map((producto) => (
        <Product
          key={producto.id}
          producto={producto}
          car={car}
          agregarProducto={agregarProducto}
        />
      ))
    )}
  </div>
);

export default Car;
