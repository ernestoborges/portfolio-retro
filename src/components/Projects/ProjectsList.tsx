import styled from "styled-components"
import { ProjectItem } from "./ProjectItem"

export function ProjectsList() {

    const projectsList = [
        { title: "Previsão do Tempo", folder: "addressweatherinfo", devices: { mobile: true, tablet: true, desktop: true } },
        { title: "Calculadora de encontros DnD5e", folder: "dndencounter", devices: { mobile: true, tablet: true, desktop: true } },
    ]

    return (
        <>
            <List>
                {
                    projectsList.map((project, index) =>
                        <ProjectItem key={index} itemData={project} />
                    )
                }
            </List>
        </>
    )
}

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    row-gap: 3rem;
    column-gap: 1rem;
    grid-auto-flow: dense;
    justify-content: space-evenly;
`

