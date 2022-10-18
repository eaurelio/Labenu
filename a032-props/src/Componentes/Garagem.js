import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>

      <button onClick={()=> {props.saudacao()}} >Boas Vindas</button>

      <Carro nomeCarro={props.carro1.nomeCarro} cor={props.carro1.cor} ano={props.carro1.ano} flex={props.carro1.flex} />
      <Carro nomeCarro={props.carro2.nomeCarro} cor={props.carro2.cor} ano={props.carro2.ano} flex={props.carro2.flex} />
      <Carro nomeCarro={props.carro3.nomeCarro} cor={props.carro3.cor} ano={props.carro3.ano} flex={props.carro3.flex} />

    </div>
  );
}

export default Garagem;
