import styled from 'styled-components';

export const Form = styled.form`

  display: flex;
  flex-direction: column;

  h1{
    align-self: center;
    margin: 0px 10px;
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
      background-color: #ccc;

      &:focus{
        color: #555555;
      }
    }
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #40c8f4;
  border: 0;
  border-radius: 4px;
  margin-top: 10px;
  padding: 5px 0;
  font-size: 20px;

  &:hover{
    opacity: 70%;
  }

  svg{
    margin-left: 10px;
  }
`;
