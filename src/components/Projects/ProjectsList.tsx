import styled from "styled-components"
import { ProjectItem } from "./ProjectItem"
import { IoLogoReact, IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5"
import { TbBrandTypescript } from "react-icons/tb"
import { AiFillApi } from "react-icons/ai"
import { GiRobotGrab } from "react-icons/gi"

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
            desc: () => <>Dashboard que disponibiliza informações sobre o tempo de uma determinado local informado pelo usuário. Utiliza api do <a href="https://developers.google.com/maps/documentation/javascript?hl=pt-br" target="_blank">GoogleMaps</a> em conjunto com a <a href="https://www.weatherapi.com" target="_blank">WeatherAPI</a>. É possivel selecionar as unidades de medidas e o idioma da aplicação.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "typescript", icon: () => <TbBrandTypescript /> },
                { name: "context", icon: () => <GiRobotGrab /> },
                { name: "restful", icon: () => <AiFillApi /> },
                { name: "css", icon: () => <IoLogoCss3 /> },
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
            desc: () => <>Simula um 'encontro' entre grupo de jogadores e inimigos no jogo Dungeons and Dragons Edição 5e. Possui uma lista de monstros obtidas pela api <a href="https://www.dnd5eapi.co" target="_blank">Dnd5eAPI</a> e um gerenciador de jogadores no grupo. A aplicação mostra uma tabela de resultados esperados na batalha.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "javascript", icon: () => <IoLogoJavascript /> },
                { name: "restful", icon: () => <AiFillApi /> },
                { name: "html", icon: () => <IoLogoHtml5 /> },
                { name: "css", icon: () => <IoLogoCss3 /> },
            ]
        },
        {
            title: "Countries Rest API",
            links: {
                live: "https://csb-hz0799.netlify.app",
                gitub: "https://github.com/ernestoborges/frontendMentor-12",
            },
            folder: "restcountries",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: () => <>Desafio do Frontend Mentor. Utiliza a API <a href="https://restcountries.com" target="_blank">RestCountries</a> para informar detalhes sobre os Países. Apresenta todos os países em uma lista com layout grid. É possível filtrar a lista por nome e região. Além disso, ao clicar no card de um país o usuário é redirecionado para uma tela com mais informações.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "javascript", icon: () => <IoLogoJavascript /> },
                { name: "restful", icon: () => <AiFillApi /> },
                { name: "router", icon: () => <IoLogoReact /> },
                { name: "cssgrid", icon: () => <IoLogoCss3 /> },
            ]
        },
        {
            title: "Meu PC",
            links: {
                live: "https://ernesto-pc.netlify.app",
                gitub: "https://github.com/ernestoborges/portfolio-react",
            },
            folder: "mypc",
            devices: { mobile: false, tablet: false, desktop: true },
            desc: () => <>Esse projeto é um portfolio lúdico que disponibiliza minhas informações imitando um sistema operacional animado. É uma experiência bem divertida, porém é melhor quando acessado por dispositivos com telas em proporções de monitores.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "javascript", icon: () => <IoLogoJavascript /> },
                { name: "router", icon: () => <IoLogoReact /> },
                { name: "context", icon: () => <GiRobotGrab /> },
                { name: "css", icon: () => <IoLogoCss3 /> },
            ]
        },
        {
            title: "Formulário Multietapas",
            links: {
                live: "https://stirring-kringle-b10f65.netlify.app",
                gitub: "https://github.com/ernestoborges/FM-multi-step-form",
            },
            folder: "multistepform",
            devices: { mobile: true, tablet: true, desktop: true },
            desc: () => <>Um desafio do Frontend mentor. É um formulário de multiplas etapas com design sugerido pelo desafio. Utilizo a biblioteca <a href="https://formik.org" target="_blank">Formik</a> para gerenciar o formulário. Além disso, foi meu primeiro projeto utilizando <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "typescript", icon: () => <TbBrandTypescript />  },
                { name: "formik", icon: () => <IoLogoReact /> },
                { name: "context", icon: () => <GiRobotGrab /> },
                { name: "css", icon: () => <IoLogoCss3 /> },
            ]
        },
        {
            title: "Formulário",
            links: {
                live: "https://chic-pika-3b70d8.netlify.app",
                gitub: "https://github.com/ernestoborges/fomulario-multipla-etapa",
            },
            folder: "sossego",
            devices: { mobile: false, tablet: false, desktop: true },
            desc: () => <>Um teste técnico que realizei. É um formulário de multiplas etapas que faz validação dos campos e armazena os dados em um contexto. Não utiliza bibliotecas para gerenciar as informações do formulário.</>,
            skills: [
                { name: "react", icon: () => <IoLogoReact /> },
                { name: "javascript", icon: () => <IoLogoJavascript />  },
                { name: "context", icon: () => <GiRobotGrab /> },
                { name: "html", icon: () => <IoLogoHtml5 /> },
                { name: "css", icon: () => <IoLogoCss3 /> },
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

