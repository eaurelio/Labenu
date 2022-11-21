import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const {setProfileName, setProfileImg} = props
  const login = () => {
    
    props.setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input onChange={setProfileName} type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input onChange={setProfileImg} type={"text"} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
