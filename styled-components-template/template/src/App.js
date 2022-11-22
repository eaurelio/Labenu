import React, { useState } from "react";
import {Garagem} from "./componentes/garagem/Garagem";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";



export default function App() {
  const nome = "Edsu";
  const [name, setName] = useState(0);

  function apresentaGaragem() {
    alert(`Esse botão foi clicado ${0} vezes`);
  }

  return (
    <>
      <GlobalStyle />
      <Header nome="Edson"/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
      <Footer text='Styled Components'/>
    </>
  );
}