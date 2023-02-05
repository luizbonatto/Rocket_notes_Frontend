import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles.js'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/luizbonatto.png" 
          alt="Foto do Usuário" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>Luiz Felipe</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
}