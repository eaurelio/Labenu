import React from "react";
import Neto from "./Neto";

export default function Filho(props) {
  const {changeNome, reset} = props
  return(
    <>
      <h2>Filho</h2>
      <Neto changeNome={changeNome} reset={reset}/>
    </>
  )
}