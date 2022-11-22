import React from "react";
import Bisneto from "./Bisneto";

export default function Neto(props) {
  const {changeNome, reset} = props
  return(
    <>
      <h3>Neto</h3>
      <Bisneto changeNome={changeNome} reset={reset}/>
    </>
  )
}