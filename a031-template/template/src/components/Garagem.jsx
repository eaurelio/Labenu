import React from "react";
import Carro from "./Carro";

function Garagem() {
  return (
    <>
      <h1>Garagem só Classicos</h1>
      <Carro nome="Porshe 911" cor='Preto' ano='1985' combustivel='Gasolina' img='https://www.stuttcars.com/wp-content/uploads/2021/04/1985-Porsche-911-Option-Codes-1024x768.jpeg'/>
      <Carro nome="Lamborghini Coutach" cor='Branco' ano='1971' combustivel='Gasolina' img='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lamborghini_Countach_US_spec_5000QV.jpg/300px-Lamborghini_Countach_US_spec_5000QV.jpg'/>
      <Carro nome="Ferrari Testarossa" cor='Vermelho' ano='1984' combustivel='Gasolina' img='https://s2.glbimg.com/o6WOlaCkQ8527uWVRpV5rmLtu3w=/0x0:1536x864/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/1/h/0bIpKnT6AFWpJxffpBUA/ferrari-testarossa-coupe-elton-john.jpg'/>
      <Carro nome="Audi Sport Quattro" cor='Verde' ano='1980' combustivel='Gasolina' img='https://cdn-cpfgb.nitrocdn.com/dRxFEBZBvMUrSIsoXplluqPbGwZVXSCF/assets/static/optimized/rev-f707bec/383bb32d89b24aa51f02c880c4984f74.IMG_5559.jpg'/>
    </>
  )
}

export default Garagem;