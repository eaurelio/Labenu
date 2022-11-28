import React from "react"; 
import { Form, FormContainer, StyledLabel, Input, SendButton, RegisterButton } from "../TelaLogin/styled";

export default function TelaCadastroEndereco (props) {
  return (
    <>
    <FormContainer >
      <h1>Cadastro de endereço</h1>
      <Form>
        <StyledLabel>Endereco
          <Input id="endereco"/>
        </StyledLabel>
        <StyledLabel>Número
          <Input id="numero"/>
        </StyledLabel>
        <StyledLabel>Telefone
          <Input id="telefone"/>
        </StyledLabel>
        <StyledLabel>Complemento
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Próxima página</SendButton>
      </Form>
    </FormContainer>
    </>
  )
}