import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import Camisa1 from "../../assets/camisa1.png";
import Camisa2 from "../../assets/camisa2.png";
import Camisa3 from "../../assets/camisa3.png";
import Camisa6 from "../../assets/camisa6.png";
import constants from '../../constants/apiEndPoint'
import {carritoContext} from '../../context/Carrito/CarritoState'
import Loader from '../Loader/Loader'
import {Link} from 'react-router-dom'

const ShoppingRocketContainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;
  color: #fff;
  text-align: center;

  h3 {
    text-align: center;
    font-size: 2rem;
    padding-top: 1.8rem;
    font-weight: 600;
  }

  .btn-info {
    width: 40%;
    background-color: #0ac8b1;
    border-radius: 10px;
    margin: 30px 10px;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    .btn-info {
      width: 40%;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    .btn-info {
      width: 36%;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    .btn-info {
      width: 25%;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    .btn-info {
      width: 20%;
    }
  }
`;

const ItemPurchaseDiv = styled.div`
  height: auto;
  width: 90%;
  background-color: transparent;
  margin: 0 auto;
  border-bottom: 2px solid #e8e8e8;
  border-top: 2px solid #e8e8e8;
  margin-top: 30px;

  .grid-shopping-rocket {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
  }

  img {
    width: 60px;
  }

  p {
    position: relative;
    top: 15px;
    font-weight: 600;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    img {
      width: 75px;
    }

    p {
      font-size: 1.5rem;
      top: 18px;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    img {
      width: 90px;
    }

    p {
      font-size: 1.7rem;
      top: 20px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    img {
      width: 120px;
    }

    p {
      font-size: 1.9rem;
      top: 28px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    img {
      width: 140px;
    }

    p {
      font-size: 1.9rem;
      top: 35px;
    }
  }
`;

function ShoppingRocket({history,match}) {
  const {articulos,success,loading,obtenerCarrito,carritoId}=useContext(carritoContext)
  const imageSrc = constants.apiEndPoint + "/public/img/";

  useEffect(() => {
    obtenerCarrito(carritoId)  
  }, [history])
  return (<>
  {loading?(<Loader/>):(
    <ShoppingRocketContainer>
    <h3>Tu cohete de compra</h3>
    {articulos&&articulos.map(articulo=>
      <ItemPurchaseDiv>
       <div className='grid-shopping-rocket'>
        <Link to={`/productos/${articulo.productoId}`}>
        <img src={imageSrc + articulo.imagen} alt='camisa1'></img>
        </Link>
        <p>X{articulo.cantidad}</p>
        <p>{articulo.talla}</p>
        <p>$ {articulo.cantidad * articulo.precio}</p>
        </div>
      </ItemPurchaseDiv>
      )}
    <div>
      <Button variant='info' onClick={()=>history.push('/')}>Seguir comprando</Button>
      <Button variant='info' onClick={()=>history.push('/login?redirect=checkout')}>Finalizar compra</Button>
    </div>
  </ShoppingRocketContainer>
  )}
    
    </> 
  );
}

export default ShoppingRocket;
