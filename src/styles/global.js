import { createGlobalStyle } from 'styled-components';
import imagemBg from '../assets/bg.jpg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    background-image: url(${imagemBg});

    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;


    @media(max-width: 500px) {
      background-size: 100% 100%;
      background-position-y: 0px;
      background-position-x: 0px;
    }
  }

  button{
    cursor: pointer;
  }
`;
