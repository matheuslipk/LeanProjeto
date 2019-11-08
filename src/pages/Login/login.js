import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Bg, { Overlay } from '../../components/BG/bg';

import Container from '../../components/Container/container';
import { Form, SubmitButton } from './style';

export default function Cadastro() {
  return (
    <>
      <Bg>
        <Overlay />
      </Bg>

      <Container>
        <Form>
          <h1>Lean Login</h1>

          <div>
            <label>E-mail</label>
            <input
              type="email"
              required
            />
          </div>

          <div id="submit">
            <SubmitButton type="submit">
              Cadastrar
            </SubmitButton>

            <Link to="/">
              Cadastro
              <IoIosArrowRoundForward color="#999" size={25} />
            </Link>

          </div>

        </Form>

        <Link to="/lista">
        Lista de usuários
        </Link>

      </Container>
    </>
  );
}
