import React from "react";
import styled from "styled-components";
import { Accordion, Card, Button } from "react-bootstrap";
import BackgroundSpaceImg5 from "../../assets/background-space5.jpg";
// import Plus from "../../assets/icon/plus.svg";
import Contact from "./Contact";

const FaqCotainer = styled.div`
  /* background-image: url(${BackgroundSpaceImg5});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646; */
  width: 100%;
  height: 700px;

  .faq-title {
    color: white;
    display: flex;
    justify-content: center;
    padding-top: 60px;
    margin-bottom: 30px;
  }

  .faq-title h2 {
    font-size: 3rem;
  }

  /* accordion bootstrap */
  .accordion-container {
    text-align: -webkit-center;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.899);
    margin-bottom: 20px;
    width: 90%;
    border-radius: 10px !important;
  }

  .btn-link {
    color: #000;
  }

  .btn {
    width: 100%;
    padding: 0.375rem 0;
  }

  /************ 320 ************/
  @media screen and (min-width: 320px) {
    height: 730px;

    .card {
      margin-bottom: 30px;
    }
  }

  /************ 480 ************/
  @media screen and (min-width: 480px) {
    height: 700px;

    .card {
      margin-bottom: 35px;
    }
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    height: 760px;

    .card {
      width: 80%;
    }

    .btn-link {
      font-size: 25px;
    }
  }

  /************ 1024 ************/
  @media screen and (min-width: 1024px) {
    height: 820px;

    .card {
      width: 75%;
    }

    .btn-link {
      font-size: 30px;
    }
  }
`;

function Faq2() {
  return (
    <FaqCotainer id='faqs'>
      <div className='faq-title'>
        <h2>Preguntas Frecuentes</h2>
      </div>
      <div className='accordion-container'>
        {" "}
        <Accordion defaultActiveKey='0'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                ¿De qué tipo de tela son las camisas?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                ¿Cuál es el costo de envío en México?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                ¿Ofrecen envíos internacionales?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                ¿Ofrecen alguna garatía?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                Tabla de tallas y medidas
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </FaqCotainer>
  );
}

export default Faq2;
