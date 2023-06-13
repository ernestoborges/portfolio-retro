
import styled from "styled-components"
import { PageHeader } from "./components/PageHeader/Header"
import { Home } from "./components/Home/Home"
export default function App() {

  return (
    <>
      <Container>
        <PageHeader />
        <Home />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  position: relative;
  padding-top: 6rem;s
`