import { Container, Form, Background } from './styles'
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus link úteis.</p>

        <h2>Crie Sua Conta</h2>

        <Input 
          placeholder = 'Nome'
          type = 'Text'
          icon = {FiUser}
        />

        <Input 
          placeholder = 'E-mail'
          type = 'text'
          icon = {FiMail}
        />

        <Input 
          placeholder = 'Senha'
          type = 'password'
          icon = {FiLock}
        />

        <Button title="Cadastrar" />

        <Link to = "/">
          Voltar para o Login
        </Link>

      </Form>

    </Container>
  )
}