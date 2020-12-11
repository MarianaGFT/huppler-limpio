import React, { useState } from "react";
import styled from "styled-components";
import Product from "../Item/Product";
import Car from "../Item/Car";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import Camisa1 from "../../assets/camisa1.png";
import Camisa2 from "../../assets/camisa2.png";
import Camisa3 from "../../assets/camisa3.png";
import Camisa6 from "../../assets/camisa6.png";

const ItemContainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;
`;

function Item() {
  //Crear lista de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa 1", precio: 199, imagen: Camisa1, descripcion: "Diseño minimalista" },
    { id: 2, nombre: "Camisa 2", precio: 299, imagen: Camisa2, descripcion: "Diseño minimalista" },
    { id: 3, nombre: "Camisa 3", precio: 399, imagen: Camisa3, descripcion: "Diseño minimalista" },
    { id: 4, nombre: "Camisa 4", precio: 499, imagen: Camisa6, descripcion: "Diseño minimalista" },
  ]);

  //State carrito de compras
  const [car, agregarProducto] = useState([]);
  return (
    <ItemContainer>
      <div className='grid-container'>
        <div>
          <p>Total items: {car.length}</p>
          <h1>Lista de productos</h1>
          {productos.map((producto) => (
            <Product
              key={producto.id}
              producto={producto}
              car={car}
              productos={productos}
              agregarProducto={agregarProducto}
            />
          ))}
          <Car car={car} agregarProducto={agregarProducto} />
        </div>
      </div>
    </ItemContainer>
  );
}

export default Item;
