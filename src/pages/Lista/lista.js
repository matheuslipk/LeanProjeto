import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import Container from '../../components/Container/container';
import { List } from './style';

export default function Lista() {
  const [lista, setLista] = useState([]);


  function handleDelete(cpf) {
    let l = [];
    for (const u of lista) {
      if (u.cpf !== cpf) {
        l = [...l, u];
      }
    }
    setLista([...l]);
  }


  useEffect(() => {
    setLista(JSON.parse(localStorage.getItem('usuarios')));
  }, []);

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(lista));
  }, [lista]);

  return (
    <>
      <Container>
        <h1>Usuários cadastrados</h1>
        <List>
          <li>
            <span>#CPF</span>
            <span>Nome</span>
            <span>Email</span>
            <span>Telefone</span>
          </li>
          {
            lista.map((usuario) => (
              <li key={usuario.cpf}>
                <span>{usuario.cpf}</span>
                <span>{usuario.name}</span>
                <span>{usuario.email}</span>
                <span>{usuario.phone}</span>
                <button onClick={() => handleDelete(usuario.cpf)} type="button">
                  <FaTrashAlt size={18} color="#fff" />
                </button>
              </li>
            ))
          }
        </List>
      </Container>
    </>
  );
}
