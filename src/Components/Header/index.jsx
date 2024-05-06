import { Input } from "../Input";
import { Container, Profile } from "./styled";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquise aqui" type="text" />
      <Profile>
        <div>
          <h3>Lucas Freitas</h3>
          <p>
            <a href="#">Sair</a>
          </p>
        </div>
      </Profile>
        <img
          src="https://github.com/LucasFMarques2.png"
          alt="Foto do usuário"
        />
    </Container>
  );
}
