import styled from "styled-components"

export function ProjectsList() {

    const projectsList = [
        { title: "Aplicaçao de Previsão do Tempo", folder: "addressweatherinfo" },
        { title: "Calculadora de encontros DnD5e", folder: "dndencounter" },
    ]

    return (
        <>
            <List>
                {
                    projectsList.map((project, index) =>
                        <ListItem key={index}>
                            {project.title}
                            <DevicesContainer>
                                <div className="mobile">
                                    <div />
                                    <img src={`/images/projects/${project.folder}/mobile.png`} />
                                </div>
                                <div className="tablet">
                                    <div />
                                    <img src={`/images/projects/${project.folder}/tablet.png`} />
                                </div>
                            </DevicesContainer>
                        </ListItem>
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
const ListItem = styled.li`

    width: 30rem;
    border: 0.1rem solid #09C8DA;
    border-radius: 2rem;
    padding: 1rem;
    background-color:rgb(12, 17, 66);
    box-shadow:  rgb(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px #000;

    display: flex;
    flex-direction: column;
    align-items: center;

   

`

const DevicesContainer = styled.div`

    display: flex;
    align-items: flex-end;
    gap: 1rem;
    position: relative;
    padding-bottom: 2rem;
   

    & .tablet {
        border: 0.3rem solid yellow;
        border-radius: 1rem;
        box-shadow:  rgba(255, 255, 0, 0.3) 0px 0 10px, inset 0 0 10px rgba(255, 255, 0, 0.3);

        width: 16rem;
        height: calc(16rem * 1.6);

        position: relative;

        & > div {
            width: 30%;
            height: 1rem;
            background-color: yellow;
            box-shadow:  rgba(255, 255, 0, 0.3) 0px 0 10px;
            border-radius: 0 0 0.4rem 0.4rem;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        & > img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }

    & .mobile {
        border: 0.3rem solid yellow;
        border-radius: 1rem;
        box-shadow:  rgba(255, 255, 0, 0.3) 0px 0 10px, inset 0 0 10px rgba(255, 255, 0, 0.3);

        width: 8rem;
        height: calc(8rem * 2.16);

        position: relative;

        & > div {
            width: 30%;
            height: 0.6rem;
            background-color: yellow;
            box-shadow:  rgba(255, 255, 0, 0.3) 0px 0 10px;
            border-radius: 0 0 0.4rem 0.4rem;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        & > img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
`