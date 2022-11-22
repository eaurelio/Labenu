import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const {changeTitle, changeImg, changeDesc} = props
  
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input onChange={changeImg} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input onChange={changeTitle} id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input onChange={changeDesc} id="descricao" />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro