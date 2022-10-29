import React, { useState } from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  const [nome, setNome] = useState('')
const [age, setAge] = useState('')
const [email, setEmail] = useState('')

const onChangeName = (e) => {
  setNome(e.target.value)
}
const onChangeAge = (e) => {
  setAge(e.target.value)
}
const onChangeEmail = (e) => {
  setEmail(e.target.value)
}
const sendData = (e) => {}

  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={nome} onChange={onChangeName}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={age} onChange={onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm