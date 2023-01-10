import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import {goToHome, goToProfile, goToLogin} from '../routes/Cordinator'

function Header() {

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToLogin(navigate)}>
        Login
      </StyledButton>
      <StyledButton onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, 'Edson')}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
