import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { useNavigate } from 'react-router-dom'

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { api } from '../../services/api';

export function Home(){
  const [tags, setTags] = useState([])
  const [tagSelected, settagSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return settagSelected([])
    }

    const alredySelected = tagSelected.includes(tagName)

    if (alredySelected) {
      const filteredTags = tagSelected.filter(tag => tag !== tagName)

      settagSelected(filteredTags)        
  
    } else {
      settagSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails (id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags (response.data)
    }

    fetchTags()
  },[])

  useEffect(() => {

    async function fetchNotes () {
      const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`);

      setNotes(response.data)
    }

    fetchNotes ()

  },[tagSelected, search])

  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
      <li>
        <ButtonText 
        title="Todos" 
        onClick = {() => handleTagSelected('all')}
        isActive = {tagSelected.length === 0} />
      </li>

        {
          tags && tags.map(tag => (          
            <li key = {String(tag.id)}>
              <ButtonText 
              onClick = {() => handleTagSelected(tag.name)}
              title={tag.name}
              isActive = {tagSelected.includes(tag.name)}
              />              
            </li>
          ))
        }
        

      </Menu>

      <Search>
        <Input placeholder = "Pesquisar pelo titulo" icon={FiSearch} onChange = { e => setSearch(e.target.value) }  />

      </Search>

      <Content>
        <Section title="Minha Notas">

      { 
        notes.map(note => (
          <Note 
            key = {String(note.id)}
            data={note}
            onClick = {() => handleDetails(note.id)}
          />
        ))
      }
        </Section>

      </Content>

      <NewNote to="new">
        <FiPlus/>
        Criar nota

      </NewNote>


    </Container>



  )
}