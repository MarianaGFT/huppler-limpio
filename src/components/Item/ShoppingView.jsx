import React from "react";
import styled from "styled-components";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import CardItem from "../CardItem";
import Camisa1 from "../../assets/camisa1.png";
import Ex1 from "../../assets/shirts/ex1.png";
import Ex2 from "../../assets/shirts/ex2.png";
import Ex3 from "../../assets/shirts/ex3.png";

const ShoppingViewContainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: auto;

  .shopping-view-grid {
    background-color: rgba(19, 19, 19, 0.12);
    grid-gap: 20px;
    display: grid;
    /* grid-column-gap: 30px; */
    grid-template-columns: repeat(1, 50%);
    justify-content: center;
    height: auto;
  }

  /************ 668 ************/
  @media screen and (min-width: 668px) {
    height: auto;

    .shopping-view-grid {
      grid-template-columns: 10% 25% 50%;
      grid-gap: 12px;
      padding-top: 20px;
      /* grid-column-gap: 25px;
      height: auto; */
    }

    .ex-tshirt-container {
      text-align: center;
    }
    .ex-tshirt-container img {
      width: 55px;
      margin-bottom: 10px;
    }

    /*Card img*/
    .gtKOzX span {
      width: 170px;
      height: 215px;
    }

    .gtKOzX span img {
      padding-top: 15px;
      width: 173px;
    }
  }
`;

function ShoppingView() {
  return (
    <ShoppingViewContainer>
      <div className='shopping-view-grid'>
        <div className='ex-tshirt-container'>
          <img src={Ex1} alt='Example 1'></img>
          <img src={Ex2} alt='Example 1'></img>
          <img src={Ex3} alt='Example 1'></img>
        </div>
        <CardItem imagenProducto={Camisa1} />
        <div className='inf-container'>
          <h3>Hola</h3>
        </div>
      </div>
    </ShoppingViewContainer>
  );
}

export default ShoppingView;
