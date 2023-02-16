import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles.js'
import { useNavigate } from 'react-router-dom'

import placeHolderImg from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header() {
  const { singOut, user } = useAuth()
  const navigation = useNavigate() 

  function handleSignOut () { 
    navigation('/')
    singOut()
   }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl} 
          alt={user.name} />

        <div>
          <span>Bem-Vindo,</span>
          <strong>{user.name}</strong>
        </div>

      </Profile>

      <Logout onClick = { handleSignOut }>
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
}