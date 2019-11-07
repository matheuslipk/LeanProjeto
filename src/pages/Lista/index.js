import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import { List } from './style';

export default function Lista() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(JSON.parse(localStorage.getItem('usuarios')));
  }, []);

  return (
    <Container>
      <List>
        {
          lista.map((usuario) => (
            <li key={usuario.cpf}>
              {usuario.name}
            </li>
          ))
        }
      </List>
    </Container>
  );
}
