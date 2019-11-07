import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from 'react-input-mask';

import Container from '../../components/Container';
import { Form, SubmitButton } from './style';

export default function Formulario() {
  const [name, setName] = useState('Matheus');
  const [phone, setPhone] = useState('12111111111');
  const [cpf, setCpf] = useState('12111111111');
  const [email, setEmail] = useState('e@e.com');

  function limparCampos() {
    setName('');
    setEmail('');
    setPhone('');
    setCpf('');
  }

  function isPhoneValido() {
    return (phone.length >= 14 && phone.length <= 15);
  }

  function isCpfValido() {
    return (cpf.length === 14);
  }

  function cpfExist() {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));

    if (!listaUsuarios) return false;

    for (const u of listaUsuarios) {
      if (u.cpf === cpf) return true;
    }
    return false;
  }

  function emailExist() {
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));

    if (!listaUsuarios) return false;

    for (const u of listaUsuarios) {
      if (u.email === email) return true;
    }
    return false;
  }

  function handleNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function handlePhoneChange(e) {
    const { value } = e.target;
    setPhone(value);
  }

  function handleCpfChange(e) {
    const { value } = e.target;
    setCpf(value);
  }

  function handleEmailChange(e) {
    const { value } = e.target;
    setEmail(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isPhoneValido()) {
      return alert('Telefone inválido');
    }
    if (!isCpfValido()) {
      return alert('Cpf inválido');
    }

    if (cpfExist()) {
      return alert('Cpf existente');
    }

    if (emailExist()) {
      return alert('Email já cadastrado');
    }

    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    const newUser = {
      name, phone, email, cpf,
    };

    if (listaUsuarios) {
      localStorage.setItem('usuarios', JSON.stringify([...listaUsuarios, newUser]));
    } else {
      localStorage.setItem('usuarios', JSON.stringify([newUser]));
    }

    return limparCampos();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastrar Cliente</h1>
        <div>
          <label>Nome</label>
          <input
            placeholder="Digite seu nome completo"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Telefone</label>
          <Input
            maskChar={null}
            mask="(99) 99999-9999"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div>
          <label>CPF</label>
          <Input
            maskChar={null}
            mask="999.999.999-99"
            value={cpf}
            onChange={handleCpfChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="email@email.com"
            value={email}
            onChange={handleEmailChange}
            type="email"
            required
          />
        </div>


        <SubmitButton type="submit">
          Salvar
          <FaSave size={20} />
        </SubmitButton>
      </Form>

      <Link to="/lista">
        Lista de usuários
      </Link>

    </Container>
  );
}
