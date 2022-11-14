import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirm, setEmailConfirm] = useState('')
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (e) => {
  setName(e.target.value)
}

const onChangeAge = (e) => {
  setAge(e.target.value)
}

const onChangeEmail = (e) => {
  setEmail(e.target.value)
}

const onChangeEmailConfirm = e => {
  setEmailConfirm(e.target.value)
}

const sendData = () => {
  if (name.length > 10 && name.length <= 30 && age >= 18 && email.includes('@')) {
    setFormFlow(2)
  }
  else {
    window.alert('TÁ ERRADO, CARAI')
  }
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      onChangeEmailConfirm={onChangeEmailConfirm}
      sendData={sendData}

      name={name}
      age={age}
      email={email}
      emailConfirm={emailConfirm}
      // insira aqui suas props
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage