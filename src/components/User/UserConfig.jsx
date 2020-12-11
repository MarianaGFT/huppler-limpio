import React from "react";
import styled from "styled-components";
import BackgroundSpaceImg7 from "../../assets/background-space7.png";

const UserConfigContainer = styled.div`
  background-image: url(${BackgroundSpaceImg7});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 3rem 0;

  p {
    /* position: relative; */
    /* right: 35px; */
    color: #fff;
    font-size: 1.7rem;
    text-align: left;
    margin-left: 0.8rem;
    padding-top: 14px;
    margin-bottom: 0;
    /* padding-left: 0.5rem; */
  }

  .small-font {
    padding-top: 0;
    font-size: 1rem;
  }

  /************ 768 ************/
  @media screen and (min-width: 768px) {
    p {
      margin: 0 9rem;
    }
  }
`;

const WhiteContainer = styled.div`
  border-radius: 5px;
  background-color: #f9f6f6;
  height: auto;
  margin: 20px auto;
  padding: 10px;
  width: 36rem;

  button {
    margin: 0 10px;
  }
`;

function UserConfig() {
  return (
    <UserConfigContainer>
      <p>Ajustes de usuario</p>
      <p className='small-font'>Mi cuenta</p>
      <WhiteContainer>hola</WhiteContainer>
    </UserConfigContainer>
  );
}

export default UserConfig;
