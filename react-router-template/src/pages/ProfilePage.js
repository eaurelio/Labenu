import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {

  const {name} = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do usuário: {name}</h1>
      {/* <h2>
        {name}
      </h2> */}
    </MainContainer>
  );
}

export default ProfilePage;
