import React, { useEffect, useState } from "react";
import axios from "axios";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const body = {
    name: nome,
    email: email
  }
  const config = {headers: {Authorization: "edson-aurelio-barbosa"}}

  const createUser = () => {
    axios
      .post(url, body, config)
      .then(res => alert('Usuário cadastrado!'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <p>Adicionar novo usuario</p>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={createUser}>Enviar</button>
    </>
  );
}

export default AddUsuario;
