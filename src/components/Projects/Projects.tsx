import styled from "styled-components"
import { ProjectsList } from "./ProjectsList"

export function Projects(){

    return (
        <>
            <Container>
                <Header>
                    <h2>Projetos</h2>
                </Header>
                <Content>
                    <ProjectsList />
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
  background-color: #101010;

`

const Header = styled.div`
`

const Content = styled.div`
`