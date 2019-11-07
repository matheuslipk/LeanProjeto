import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    span{
      flex: 1;
      color: #888;
    }

    button{
      display: flex;
      background-color: #f00;
      border: none;
      padding: 3px;
      border-radius: 3px;
      opacity: 70%;

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
