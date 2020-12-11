import React from "react";
import styled from "styled-components";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
import Plus from "../../assets/icon/plus.svg";

const FaqCotainer = styled.div`
  background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 900px;

  .faq-title {
    color: white;
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  .cards-faq {
    display: grid;
    grid-template-columns: repeat(1, 300px);
    grid-template-rows: 5;
    grid-gap: 20px;
    justify-content: center;
  }

  .cards {
    background-color: rgba(255, 255, 255, 0.899);
    width: 300px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }

  .cards p {
    padding-left: 20px;
    font-size: 14px;
  }

  .cards img {
    position: relative;
    /* position: absolute; */
    right: -15px;
  }
`;

function Faq() {
  return (
    <FaqCotainer>
      <div className='faq-title'>
        <h2>FAQs</h2>
      </div>
      <div className='cards-faq'>
        <span className='cards'>
          <p>
            De qué tipo de tela son las camisas? <img src={Plus} alt='plus'></img>
          </p>
        </span>
        <span className='cards'>
          <p>
            Cuál es el costo de envío en México? <img src={Plus} alt='plus'></img>
          </p>
        </span>
        <span className='cards'>
          <p>
            Ofrecen envíos internacionales? <img src={Plus} alt='plus'></img>
          </p>
        </span>
        <span className='cards'>
          <p>
            Ofrecen alguna garatía? <img src={Plus} alt='plus'></img>
          </p>
        </span>
        <span className='cards'>
          <p>
            Tabla de tallas y medidas <img src={Plus} alt='plus'></img>
          </p>
        </span>
      </div>
    </FaqCotainer>
  );
}

export default Faq;
