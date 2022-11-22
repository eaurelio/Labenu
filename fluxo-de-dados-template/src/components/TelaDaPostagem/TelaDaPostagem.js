import React from 'react'
import { ContainerPostagem, Image, Description } from './styles'

const TelaDaPostagem = (props) => {
  const { img, desc, title } = props

  return (
    (img.length > 0 && title.length > 0) ?
    <ContainerPostagem>
      <h1>{title}</h1>
      <Image src={img} />
      <Description>{desc}</Description>
    </ContainerPostagem> 
    : 
    <ContainerPostagem>
      <h1>{title}</h1>
      <Image src={'https://picsum.photos/536/354'} />
      <Description>{'lorem ipsum'}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem