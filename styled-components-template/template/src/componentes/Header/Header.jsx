import { HeaderG } from "./style"

export default function Header(props) {
  return(
    <HeaderG>
      <h1>Garagem do {props.nome}</h1>
    </HeaderG>
  )
}