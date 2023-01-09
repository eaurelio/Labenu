import { StyledHeader } from "../style";


export default function LoginPage() {
  return(
    <StyledHeader>
      Usuário: 
      <input type="text" />
      Senha: 
      <input type="password" />
      </ StyledHeader>
  )
}