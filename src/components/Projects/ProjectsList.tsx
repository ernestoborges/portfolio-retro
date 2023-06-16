import styled from "styled-components"
import { ProjectItem } from "./ProjectItem"
import {IoLogoReact, IoLogoCss3} from "react-icons/io5"
import {TbBrandTypescript} from "react-icons/tb"
import {AiFillApi} from "react-icons/ai"
import {GiRobotGrab} from "react-icons/gi"

export function ProjectsList() {

    const projectsList = [
        {
            title: "Previsão do Tempo",
            folder: "addressweatherinfo",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            skills: [
                {name: "react", icon: ()=> <IoLogoReact />}, 
                {name: "typescript", icon: ()=> <TbBrandTypescript />}, 
                {name: "context", icon: ()=> <GiRobotGrab />},
                {name: "restful", icon: ()=> <AiFillApi />},
                {name: "css", icon: ()=> <IoLogoCss3 />},
            ]
        },
        {
            title: "Calculadora de encontros DnD5e",
            folder: "dndencounter",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            skills: [
                {name: "react", icon: ()=> <IoLogoReact />},
                {name: "javascript", icon: ()=> <IoLogoReact />}, 
                {name: "restful", icon: ()=> <AiFillApi />},
                {name: "html", icon: ()=> <IoLogoReact />},  
                {name: "css", icon: ()=> <IoLogoCss3 />},
            ]
        },
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
    grid-template-columns: repeat(auto-fill, 310px);
    row-gap: 3rem;
    column-gap: 1rem;
    grid-auto-flow: dense;
    justify-content: space-evenly;
`

