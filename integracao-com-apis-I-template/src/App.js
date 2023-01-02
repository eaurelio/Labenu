import React, { useEffect, useState } from "react";
import AddUsuario from "./Componentes/AddUsuario/AddUsuario";
import Usuario from "./Componentes/Usuario/Usuario";
import axios from "axios";

const usuariosLocal = [
  {
    id: 1,
    name: ""
  }
]

function App() {

  // Definindo as variáveis do método axios
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const config = {
    headers: {
      Authorization : 'edson-aurelio-barbosa'
    }
  }

  // Declarando função que irá fazer o GET
  const getAllUsers = () => {
    axios.get(url, config)
    .then(res => setUsuarios(res.data))
    .catch(err => alert(err))
  }

  // Executando a função uma única vez
  useEffect(() => {getAllUsers()}, [])

  const [usuarios, setUsuarios] = useState([])

  return (
    <>
      <p>Para esta aula usaremos a <a href="https://documenter.getpostman.com/view/7549981/SzfCT5G2#intro" target="_blank" rel="noreferrer">API Labenusers</a></p>
      <AddUsuario />
      {usuarios.map((usuario) => {
        return <Usuario key={usuario.id} usuario={usuario} />
      })}
    </>
  )
}

export default App;
