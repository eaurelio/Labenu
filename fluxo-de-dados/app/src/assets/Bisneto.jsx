import React from "react";

export default function Bisneto(props) {
  const {changeNome, reset} = props
  return(
    <>
      <h4>Bisneto</h4>
      <button onClick={changeNome}>Clique aqui</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}