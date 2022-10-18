import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome = 'Edson'

  const carro1 = {
    nomeCarro: 'Fox',
    cor: 'Vermelho',
    ano: '2007',
    flex: true
  }
  const carro2 = {
    nomeCarro: 'Palio',
    cor: 'Branco',
    ano: '2015',
    flex: true
  }
  const carro3 = {
    nomeCarro: 'Mustang',
    cor: 'Laranja',
    ano: '1970',
    flex: false
  }

  function saudacao() {
    window.alert(`Bem vindo, ${nome}`)
  }

  return (
    <div>
      <Garagem nome={'Edson'} carro1={carro1} carro2={carro2} carro3={carro3} saudacao={saudacao}/>
    </div>
  );
}
