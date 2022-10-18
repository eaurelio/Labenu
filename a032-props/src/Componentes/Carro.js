function Carro(props) {
  return (
    <div>
      <h2>{props.nomeCarro}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex === true ? 'Sim' : 'Não'}</li>
      </ul>
    </div>
  );
}

export default Carro;
