import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  const {post} = props

  return (
    (props.viewPost === 2) ?
    <ContainerPostagem>
      <TitleHeader>{post.title}</TitleHeader>
      <Image src={post.img} />
      <Description>{post.desc}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
      <TitleHeader>Título</TitleHeader>
      <Image src='https://picsum.photos/500/375?grayscale' />
      <Description>Descrição</Description>
    </ContainerPostagem>

  );
};

export default TelaDaPostagem;
