import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Form, Avatar } from './styles'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import placeHolderImg from '../../assets/avatar_placeholder.svg'

export function Profile() {
  const { user, updateProfile} = useAuth()

  const [name, setName] = useState (user.name)
  const [email, setEmail] = useState (user.email)
  const [oldPassword, setOldPassword] = useState ()
  const [newPassword, setNewPassword] = useState ()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate () {    
      const updated = {
        name, 
        email, 
        password: newPassword,
        old_password: oldPassword,
      };

      const userUpdated = Object.assign(user, updated)

      await updateProfile ({user : userUpdated, avatarFile}) 

  }

  function handleBack () {
    navigate(-1)
  }

  async function handleChangeAvatar (event) {
    const file = event.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <button type='button' onClick = {handleBack}>
          <FiArrowLeft size={24}/>
        </button>
      </header>

      <Form>

        <Avatar>
          <img 
            src={avatar}
            alt="Foto do Usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            
            <input 
              id ="avatar"
              type = "file"
              onChange = { handleChangeAvatar }
            />
          </label>

        </Avatar>

      <Input 
        type = "text"
        placeholder = "Nome"
        icon = { FiUser }
        value = {name}
        onChange = {e => setName(e.target.value)}
      />

      <Input 
        type = "text"
        placeholder = "Email"
        icon = { FiMail }
        value = {email}
        onChange = {e => setEmail(e.target.value)}
      />

      <Input 
        type = "password"
        placeholder = "Senha Atual"
        icon = { FiLock }
        onChange = {e => setOldPassword(e.target.value)}
      />

      <Input 
        type = "password"
        placeholder = "Nova Senha"
        icon = { FiLock }
        onChange = {e => setNewPassword(e.target.value)}
      />

      <Button  title = "Salvar"  onClick = { handleUpdate }/>

      </Form>

    </Container>
  )
}