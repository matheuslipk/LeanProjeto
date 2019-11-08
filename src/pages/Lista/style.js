import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
  min-width: 500px;
  padding: 5px;

  h1{
    text-align: center;
    margin-top: 20px;
  }

  @media(max-width: 800px){
    & {
      width: 100%;
    }
  }

  #divPagination{
    display: flex;
    justify-content: space-around;
    /* border: solid 1px; */
    margin-top: 20px;

    button{
      background-color:#40c8f4;
      border: none;
      border-radius: 4px;
      opacity: 70%;

      &:hover{
        opacity: 100%;
      }

      svg{
        color: #fff;
      }
    }
  }
`;

export const List = styled.ul`
  list-style: none;

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
