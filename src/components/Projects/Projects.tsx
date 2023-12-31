import styled from "styled-components"
import { ProjectsList } from "./ProjectsList"

export function Projects(){

    return (
        <>
            <Container id="projects">
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
    width: 100%;
    background-color: #101010;
    padding-top: 6rem;

`

const Header = styled.div`
`

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`