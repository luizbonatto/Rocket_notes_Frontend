import { Container, Form, Avatar } from './styles'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to ="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
          <img 
            src="https://github.com/luizbonatto.png" 
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            
            <input 
              id ="avatar"
              type = "file"
            />
          </label>

        </Avatar>

      <Input 
        type = "text"
        placeholder = "Nome"
        icon = { FiUser }
      />

      <Input 
        type = "text"
        placeholder = "Email"
        icon = { FiMail }
      />

      <Input 
        type = "password"
        placeholder = "Senha Atual"
        icon = { FiLock }
      />

      <Input 
        type = "password"
        placeholder = "Nova Senha"
        icon = { FiLock }
      />

      <Button  title = "Salvar" />

      </Form>

    </Container>
  )
}