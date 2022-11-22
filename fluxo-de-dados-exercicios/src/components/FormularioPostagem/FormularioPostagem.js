import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const {setTitle, setDesc, setImg, setViewPost} = props

  const post = _ => {
    setViewPost(2)
  }

  return (
    <FormContainer>
      <Form>
      <h2>Insira sua postagem abaixo: </h2>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input onChange={setTitle} id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input onChange={setImg} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input onChange={setDesc} id="descricao" />
        </StyledLabel>
        <SendButton onClick={post} value='coisa' >
          Clique nu seu butão
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
