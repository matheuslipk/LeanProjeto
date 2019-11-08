import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container, List } from './style';

export default function Lista({ location }) {
  const [lista, setLista] = useState([]);
  const [listVisible, setListVisible] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  function handleDelete(cpf) {
    let l = [];
    for (const u of lista) {
      if (u.cpf !== cpf) {
        l = [...l, u];
      }
    }
    setLista([...l]);
  }

  function handleChangePerPage(e) {
    setPerPage(e.target.value);
  }

  useEffect(() => {
    const allUser = lista;
    const initialUser = (page - 1) * perPage;

    let exibir = [];

    for (let i = initialUser; (i < allUser.length) && (i < initialUser + perPage); i += 1) {
      exibir = [...exibir, allUser[i]];
    }

    // console.log('Exibir', exibir);

    setListVisible(exibir);
  }, [page, perPage, lista]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const pageQuery = Number.parseInt(query.get('page'), 10);

    if (Number.isInteger(pageQuery)) {
      if (pageQuery < 1) {
        setPage(1);
      } else {
        setPage(pageQuery);
      }
    } else {
      setPage(1);
    }
    setLista(JSON.parse(localStorage.getItem('usuarios')));
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(lista));
  }, [lista]);

  return (
    <>
      <Container>
        <h1>Usuários cadastrados</h1>
        <div>
          <label>Quantidade por pagina</label>
          <select onChange={handleChangePerPage}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>

        <List>
          <li>
            <span>#CPF</span>
            <span>Nome</span>
            <span>Email</span>
            <span>Telefone</span>
          </li>
          {
            listVisible.map((usuario) => (
              <li key={usuario.cpf} onClickCapture={() => handleDelete(usuario.cpf)}>
                <span>{usuario.cpf}</span>
                <span>{usuario.name}</span>
                <span>{usuario.email}</span>
                <span>
                  {usuario.phone}
                </span>
              </li>
            ))
          }
        </List>

        <div id="divPagination">
          <button type="button">
            <IoIosArrowBack size={30} id="pagePrevios" />
          </button>

          <button type="button">
            <IoIosArrowForward size={30} id="pageNext" />
          </button>

        </div>

      </Container>
    </>
  );
}
