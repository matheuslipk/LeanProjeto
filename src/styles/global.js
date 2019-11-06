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
  }

  button{
    cursor: pointer;
  }
`;
