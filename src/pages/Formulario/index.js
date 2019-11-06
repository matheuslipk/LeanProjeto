import React from 'react';

import Container from '../../components/Container';
import { Form } from './style';

export default function Formulario() {
  return (
    <Container>
      <Form>
        <div>
          <label>Nome</label>
          <input placeholder="Digite seu nome completo" />
        </div>
        <div>
          <label>Telefone</label>
          <input placeholder="(00) 00000-0000" />
        </div>
        <div>
          <label>CPF</label>
          <input placeholder="000.000.000-00" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder="email@email.com" />
        </div>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
