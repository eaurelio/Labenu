import { CardCarro } from "./style";

export function Carro(props) {
    return (
      <CardCarro>
        <h2>{props.nome}</h2>
        <img src={props.img} width='200'/>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex ? "true" : "false"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </CardCarro>
    );
  }
  