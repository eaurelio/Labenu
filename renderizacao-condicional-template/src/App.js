import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [state, setState] = useState(1)
  const onChangeState = (value) => {
    console.log(state)
    setState(value)
    console.log(state)
  }

  return (
    <MainContainer >
      <GlobalStyled />
        {state === 1 
          ? <TelaLogin  onChangeState={onChangeState}/>
          : <TelaCadastro onChangeState={onChangeState} />}
    </MainContainer>
  );
}

export default App;