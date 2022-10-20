import React from "react";
import {Garagem} from "./componentes/garagem/Garagem";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";



export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
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