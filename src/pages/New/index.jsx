import { Container, Form } from "./styles"
import { Link } from 'react-router-dom'


import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New () {
  return (
    <Container>

      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/"> Voltar </Link>
          </header>
          <Input placeholder = "Título"/>
          <TextArea placeholder ="Obervações" />

          <Section title ="Links úteis"/>

          <NoteItem value = "https://rocketseat.com.br"/>
          <NoteItem isNew placeholder = "Novo Link"/>

          <Section title ="Marcadores"/>

          <div className="tags">      

          <NoteItem value = "React"/>
          <NoteItem isNew placeholder = "Nova Tag"/>

          </div>

          <Button title = "Salvar" />

        </Form>

        
      </main>

    </Container>


  )
}