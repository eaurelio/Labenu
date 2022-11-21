import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
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
  const [pageFlow, setPageFlow] = useState(1);
  const [viewPost, setViewPost] = useState(1)

  //------------------------------------------
  const [profile, setProfile] =  useState({
    nome: '',
    img: ''  
  })

  const setProfileImg = (e) => {
    setProfile({nome: profile.nome, img: e.target.value})
    console.log(profile.img)
  }

  const setProfileName = e => {
    setProfile({nome: e.target.value, img: profile.img})
    console.log(profile.nome)
  }
 
//------------------------------------------
  const [post, setPost] = useState({
    title: '',
    img: '',
    desc: ''
  })

  const setTitle = e => {
    setPost({title: e.target.value, img: post.img, desc: post.desc})
    console.log(post)
  }
  const setImg = e => {
    setPost({title: post.title, img: e.target.value, desc: post.desc})
    console.log(post)
  }
  const setDesc = e => {
    setPost({title: post.title, img: post.img, desc: e.target.value})
    console.log(post)
  }
//------------------------------------------
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header nome={profile.nome} img={profile.img} pageFlow={pageFlow}/>
          {pageFlow === 1 ? (
            <FormularioLogin 
              setPageFlow={setPageFlow} 
              setProfileName={setProfileName}
              setProfileImg={setProfileImg}
              />
          ) : (
            <FormularioPostagem 
              setTitle={setTitle}
              setImg={setImg}
              setDesc={setDesc}
              setViewPost={setViewPost}
            />
          )}
        </aside>
        <TelaDaPostagem 
          post={post}
          viewPost={viewPost}
        />
      </Container>
    </>
  );
}

export default App;
