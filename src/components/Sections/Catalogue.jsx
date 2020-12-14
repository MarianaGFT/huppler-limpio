import React,{useState,useEffect,useContext} from "react";
import styled from "styled-components";
import CardItem from "../CardItem";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import CamisaCore from "../../assets/clothes/Core.png";
import constants from '../../constants/apiEndPoint'
//context
import {productosContext} from '../../context/Producto/ProductoState'
const CatalogueContainer = styled.div`
  /* background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646; */
  width: 100%;
  height: auto;

  .container-title {
    display: flex;
    justify-content: center;
  }

  .container-title h2 {
    color: #fff;
    margin: 0em;
    padding: 30px 0px;
    font-size: 3rem;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    height: 900px;
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    height: 1100px;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    height: 1100px;
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    height: 900px;
  }
`;

const CatalogueGrid = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: 2;
  justify-content: center;

  span {
    margin: 0 auto;
    text-align: center;
    border-radius: 10px;
    background-color: #1f8bac51;
    /* width: 145px;
    height: 190px; */
    width: 85%;
    height: 107%;
  }

  span img {
    /* width: 150px; */
    width: 80%;
    margin-top: 5px;
  }

  span h3 {
    margin: 0px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    grid-gap: 8%;
    grid-column-gap: 0%;
    display: grid;
    grid-template-columns: repeat(2, 40%);

    span {
      width: 85%;
      height: 120%;
    }

    span img {
      width: 80%;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    grid-gap: 8%;
    grid-column-gap: 0%;
    grid-template-columns: repeat(2, 40%);

    span {
      width: 85%;
      height: 115%;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    grid-gap: 45px 65px;
    grid-template-columns: repeat(3, 150px);

    span {
      width: 170px;
      height: 220px;
    }

    span h3 {
      margin-top: 10px;
    }

    span img {
      width: 160px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    /* margin-top: 30px;
    grid-gap: 45px 65px; */
    grid-template-columns: repeat(4, 180px);

    span {
      width: 190px;
      height: 260px;
    }

    span img {
      margin-top: 15px;
      width: 185px;
    }

    span h3 {
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;

function Catalogue({history}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageSrc = constants.apiEndPoint + "/public/img/";
  const {productos,obtenerProductos}=useContext(productosContext)
  //ComponentDidMount = Cuando la pagina cargue, asegura que el código ya esta listo
  useEffect(() => {
    obtenerProductos();
      // setLoading(false);
  }, [history]);
  return (
    <CatalogueContainer id='catalogo'>
      <div className='container-title'>
        <h2>Nuestro catálogo</h2>
      </div>
      <CatalogueGrid>
        {productos.map((product)=>{
          return(
        <CardItem key={product.id} imagenProducto={product.imagenes.length > 0
          ? imageSrc + product.imagenes[0].nombreImagen
          : CamisaCore} nombreCamisa={product.nombre} id={product.id} />
        )}) }   
      </CatalogueGrid>
    </CatalogueContainer>
  );
}

export default Catalogue;
