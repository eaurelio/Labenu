import React, { useState, useEffect } from "react";
import { BASE_URL, BASE_URL_HP } from "./constants/constants";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import UseRequestData from "./hooks/useRequestData";

function App() {

  // const nomeUsuarios = useCapturaNome()
  // const postagens = useCapturaPost()

  const [nomeUsuarios, loadingUser, errorUser] = UseRequestData(BASE_URL,'users')
  const [postagens, loadingPost, errorPost] = UseRequestData(BASE_URL, 'comments')
  const [HP, loadingHP, errorHP] = UseRequestData(BASE_URL_HP, 'students')
  

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Personagens de Harry Potter</Title>
      {errorHP && <p>Erro na requisição. Aguarde... </p>}
      {!loadingHP ? <NameContainer>
        {HP.map((usuario, index) => {
          return(
          <Card 
          key={index}
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
      : 
      <p>Carregando....</p>
      }



      <Title>Nomes dos usuários</Title>
      {errorUser && <p>Erro na requisição. Aguarde... </p>}
      {!loadingUser ? <NameContainer>
        {nomeUsuarios.map((usuario, index) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
      : 
      <p>Carregando....</p>
      }
      

      <hr />
      <Title>Comentários dos usuários</Title>
      {errorPost && <p>Erro na requisição. Aguarde... </p>}
      {!loadingPost ? 
        <PostContainer>
        {postagens.map((post) => {
          //console.log(post);
          return(
            <Card 
            key={post.id} 
            text={post.body} 
            backgroudColor={'#1dc690'}
            textColor={'#ffffff'}
            />)
        })}
        </PostContainer>
      :
        <p>Carregando....</p>
      }
      
    </div>
  );
}

export default App;



