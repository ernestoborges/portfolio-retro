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
            links: {
                live: "https://addressweatherinfo.netlify.app",
                gitub: "https://github.com/ernestoborges/address-weather-info",
            },
            folder: "addressweatherinfo",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: "Dashboard que disponibiliza informações sobre o tempo de uma determinado local informado pelo usuário. Utiliza api do GoogleMaps em conjunto com a OpenWeather. É possivel selecionar as unidades de medidas e o idioma da aplicação.",
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
            links: {
                live: "https://csb-un44vw.netlify.app",
                gitub: "https://github.com/ernestoborges/dnd5e-encounter-calculator",
            },
            folder: "dndencounter",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: "Simula um 'encontro' entre grupo de jogadores e inimigos no jogo Dungeons and Dragons Edição 5e. Possui uma lista de monstros obtidas pela api Dnd5eAPI e um gerenciador de jogadores no grupo. A aplicação mostra uma tabela de resultados esperados na batalha.",
            skills: [
                {name: "react", icon: ()=> <IoLogoReact />},
                {name: "javascript", icon: ()=> <IoLogoReact />}, 
                {name: "restful", icon: ()=> <AiFillApi />},
                {name: "html", icon: ()=> <IoLogoReact />},  
                {name: "css", icon: ()=> <IoLogoCss3 />},
            ]
        },
        {
            title: "Calculadora de encontros DnD5e",
            links: {
                live: "https://csb-un44vw.netlify.app",
                gitub: "https://github.com/ernestoborges/dnd5e-encounter-calculator",
            },
            folder: "dndencounter",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: "Simula um 'encontro' entre grupo de jogadores e inimigos no jogo Dungeons and Dragons Edição 5e. Possui uma lista de monstros obtidas pela api Dnd5eAPI e um gerenciador de jogadores no grupo. A aplicação mostra uma tabela de resultados esperados na batalha.",
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
    width: 100%;
    max-width: 130rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 310px);
    row-gap: 4rem;
    column-gap: 4rem;
    grid-auto-flow: dense;
    justify-content: space-evenly;
`

