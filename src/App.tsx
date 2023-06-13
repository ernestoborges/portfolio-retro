
import styled from "styled-components"
import { PageHeader } from "./components/PageHeader/Header"
import { Home } from "./components/Home/Home"
import { Projects } from "./components/Projects/Projects"
export default function App() {

  return (
    <>
      <Container>
        <PageHeader />
        <Home />
        <Projects />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  position: relative;
  padding-top: 6rem;

`