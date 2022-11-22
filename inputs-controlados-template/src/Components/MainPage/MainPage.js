import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [mail, setMail] = useState('')

  const onChangeNome = (e) => {
    setNome(e.target.value)
    console.log(nome)
  }

  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }

  const onChangeEmail = (e) => {
    setMail(e.target.value)
  }

  const criaPessoa = () => {
    let obj = {nome: nome, idade: idade, mail: mail}
    console.log(obj)
    setNome(''); setIdade(''); setMail('')
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>
        <label>
          E-mail:
          <Input value={mail} onChange={onChangeEmail} />
        </label>
      <button onClick={criaPessoa}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage