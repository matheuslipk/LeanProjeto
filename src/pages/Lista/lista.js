import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import {
  Container, List, ButtonPag, Bg,
} from './style';

function ButtomNext(props) {
  const { page, disabled } = props;

  const history = useHistory();

  function handleClick() {
    history.push(`/lista/${page}`);
  }

  return (
    <ButtonPag onClick={handleClick} disabled={disabled}>
      <IoIosArrowForward size={30} />
    </ButtonPag>
  );
}

function ButtomBack(props) {
  const { page, disabled } = props;

  const history = useHistory();

  function handleClick() {
    history.push(`/lista/${page}`);
  }

  return (
    <ButtonPag onClick={handleClick} disabled={disabled}>
      <IoIosArrowBack size={30} />
    </ButtonPag>
  );
}

export default function Lista({ match }) {
  const [lista, setLista] = useState([]);
  const [listVisible, setListVisible] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const quantPagina = lista.length / perPage;

  function handleDelete(email) {
    let l = [];
    for (const u of lista) {
      if (u.email !== email) {
        l = [...l, u];
      }
    }
    setLista([...l]);
  }

  function handleChangePerPage(e) {
    setPerPage(Number.parseInt(e.target.value, 10));
    localStorage.setItem('perPage', e.target.value);
  }

  useEffect(() => {
    const allUser = lista;
    const initialUser = (page - 1) * perPage;

    let exibir = [];

    for (let i = initialUser; (i < allUser.length) && (i < initialUser + perPage); i += 1) {
      exibir = [...exibir, allUser[i]];
    }

    setListVisible(exibir);
  }, [page, perPage, lista]);

  useEffect(() => {
    const pageQuery = Number.parseInt(match.params.page, 10);

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
  }, [match.params.page]);

  useEffect(() => {
    const perPageStorage = localStorage.getItem('perPage');
    if (perPageStorage) {
      setPerPage(Number.parseInt(perPageStorage, 10));
      const select = document.getElementById('selectPerPage');
      select.value = perPage;
    }

    localStorage.setItem('usuarios', JSON.stringify(lista));
  }, [lista, perPage]);

  return (
    <Bg>
      <Container>
        <h1>Lean lista</h1>
        <div>
          <label>Quantidade por página</label>
          <select onChange={handleChangePerPage} id="selectPerPage">
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>

        <List>
          <li>
            <span><strong>#CPF</strong></span>
            <span><strong>Nome</strong></span>
            <span><strong>Email</strong></span>
            <span><strong>Telefone</strong></span>
          </li>
          {
            listVisible.map((usuario) => (
              <li key={usuario.email} onClickCapture={() => handleDelete(usuario.email)}>
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
          <ButtomBack page={page - 1} disabled={page < 2} />
          <label>
            {`Página ${page} de ${Math.ceil(quantPagina)}`}
          </label>
          <ButtomNext page={page + 1} disabled={page >= (lista.length / perPage)} />
        </div>

      </Container>
    </Bg>
  );
}
