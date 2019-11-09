import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Bg, { Overlay } from '../../components/BG/bg';

import Container from '../../components/Container/container';
import { Form, SubmitButton, LabelError } from './style';

function Teste({ email }) {
  const history = useHistory();

  function handleClick() {
    const lista = JSON.parse(localStorage.getItem('usuarios'));
    for (const u of lista) {
      if (u.email === email) {
        history.push('/lista');
      }
    }
  }

  return (
    <SubmitButton type="submit" onClick={handleClick}>
      Entrar
    </SubmitButton>
  );
}

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [labelOculto, setLabelOculto] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const lista = JSON.parse(localStorage.getItem('usuarios'));
    for (const u of lista) {
      if (u.email === email) {
        return;
      }
      setLabelOculto(false);
    }
  }

  return (
    <>
      <Bg>
        <Overlay />
      </Bg>

      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Lean Login</h1>

          <div>
            <label>E-mail</label>
            <input
              // type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <LabelError id="labelError" oculto={labelOculto}>Email não existe</LabelError>
          </div>

          <div id="submit">

            <Link to="/">
              Criar um cadastro
            </Link>

            <Teste email={email} />
          </div>

        </Form>

      </Container>
    </>
  );
}
