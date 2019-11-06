import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  button{
    color: #ffffff;
    background-color: #40c8f4;
    border: 0;
    border-radius: 4px;
    margin-top: 10px;
    padding: 5px 0;

    &:hover{
      opacity: 70%;
    }
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;

    label{
      width: 60px;
      color: #999999;
    }

    input {
      flex: 1;
      padding: 5px 10px;
      border-radius: 4px;
      margin-left: 10px;
      margin-top: 5px;
      color: #efeeed;
      border: 2px solid #dbdbdb;
      background-color: #0003;

      &:focus{
        color: #555555;
      }
    }
  }
`;
