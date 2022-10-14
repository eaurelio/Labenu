import React from "react";

export default function Carro(props) {
  return(
    <div className="card">
      <h2>{props.nome}</h2>
      <ol>
        <ul>Cor: {props.cor}</ul>
        <ul>Ano: {props.ano}</ul>
        <ul>Combustível: {props.combustivel}</ul>
        <img src={props.img} width={'400px'} alt="" />
      </ol>
    </div>
  )
}