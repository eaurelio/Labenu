import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {


  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="nome">
          Nome:
          <Input id="nome" />
        </StyledLabel>
        <StyledLabel htmlFor="email">
          E-mail:
          <Input id="email" />
        </StyledLabel>
        <StyledLabel htmlFor="senha">
          Senha:
          <Input id="senha" />
        </StyledLabel>
        <StyledLabel htmlFor="checksenha">
          Confirmação da senha:
          <Input id="checksenha" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
