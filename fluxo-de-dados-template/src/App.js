import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')

  const changeImg = (e) => {
    setImg(e.target.value)
  }

  const changeDesc = (e) => {
    console.log(e.target.value)
    setDesc(e.target.value)
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            changeDesc={changeDesc}
            changeImg={changeImg}
            changeTitle={changeTitle}
           />
        </aside>
        <TelaDaPostagem 
          img={img}
          desc={desc}
          title={title}
        />
      </Container>
    </>
  );
}

export default App;
