import React from "react";
import logo from '../img/logo.png'

export default function Header() {
  return(
    <header>
      <logo>
        <img src={logo} width='80px' alt="" />
      </logo>
        <h1>Aula - Componentes React</h1>
      
    </header>
  )
}