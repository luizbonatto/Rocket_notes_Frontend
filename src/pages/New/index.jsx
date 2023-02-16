import { Container, Form } from "./styles"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { api } from '../../services/api'

export function New () {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  const navigate = useNavigate()

  function handleAddlink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }
  
  function handleBack () {
    navigate(-1)
  }
  
  function handleRemoveLink (deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags (prevState => [...prevState, newTags])
    setNewTags ('')
  }

  function handleRemoveTags (deleted) {
    setTags (prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote () {
    if (!title) {
      return alert ('Digite o titulo da Nota')
    }

    if(newLink) {
      return alert ('Você deixou um link no campo para adicionar, mas não clicou em adicionar')
    }    


    if(newTags) {
      return alert ('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar')
    }
    
    await api.post('/notes', {
      title,
      description,
      tags,
      links
    });

    alert("Nota cadastrada com sucesso")
    navigate(-1)   
  }

  return (
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>      
            <ButtonText title="Voltar" onClick = {handleBack}/>
          </header>

          <Input 
            placeholder = "Título"
            onChange = { e => setTitle (e.target.value) }
          />


          <TextArea 
            placeholder ="Obervações" 
            onChange = {e => setDescription (e.target.value) }
          />

          <Section title ="Links úteis"/>

          {
            links.map((link, index) => (
              <NoteItem 
              key = {String(index)}
              value = {link}
              onClick = { () => handleRemoveLink(link) }
            />
            ))
          }   

            <NoteItem 
              isNew 
              placeholder = "Novo Link"
              value = {newLink}
              onChange = { e => setNewLink (e.target.value)}
              onClick = { handleAddlink }
            />

          <Section title ="Marcadores"/>

          <div className="tags">    

          {
            tags.map((tag, index) => (
              <NoteItem 
              key = { String(index) }
              value = {tag}
              onClick = { () => handleRemoveTags(tag) }
              />
            ))
          }        
          <NoteItem 
            isNew 
            placeholder = "Nova Tag"
            value = {newTags}
            onChange = { e => setNewTags (e.target.value) }
            onClick = {handleAddTag}
          />

          </div>

          <Button title = "Salvar" onClick = {handleNewNote}/>

        </Form>

        
      </main>

    </Container>


  )
}