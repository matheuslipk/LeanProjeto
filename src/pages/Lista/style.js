import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
  min-width: 400px;
  padding: 5px;
  background-color: #eee;
  min-height: 80%;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    label{
      color: #999;
    }
  }

  select{
    padding: 5px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    background-color: #40c8f4;
    color: #fff;
  }

  h1{
    text-align: center;
    margin-top: 20px;
    color: #999;
  }

  @media(max-width: 800px){
    & {
      width: 98%;
    }
  }

  #divPagination{
    display: flex;
    justify-content: center;
    /* border: solid 1px; */
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  flex: 1;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    & + li:hover{
      cursor: pointer;
      background-color: #ddd;
    }
    /* border: 1px solid; */

    span{
      flex: 1;
      color: #888;
      font-size: 12px;
      padding: 10px 0;
      text-align: center;

      & + span{
        border-left: 1px solid #ddd;
      }

      @media(max-width: 800px){
        font-size: 11px;
      }
    }

    button{
      display: flex;
      background-color: #f00;
      border: none;
      padding: 3px;
      border-radius: 3px;
      opacity: 50%;

      &:hover{
        opacity: 100%;
      }

    }

    &+li{
      border-top: 1px solid #ddd;
      padding-top: 5px;
      margin-top: 5px;
    }
  }

`;

export const ButtonPag = styled.button.attrs({
  type: 'button',
})`
    background-color:#40c8f4;
    border: none;
    border-radius: 4px;
    opacity: 70%;
    margin: 0 10px;

    &:hover{
      opacity: 100%;
    }

    svg{
      color: #fff;
    }  

    &[disabled]{
      opacity: 30%;
      cursor: not-allowed;
    }
`;

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(to top, #40c8f4, #2179b5);
  background: linear-gradient(to top, #40c8f4, #2179b5);
`;
