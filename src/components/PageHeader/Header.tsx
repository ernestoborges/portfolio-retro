import styled from "styled-components"

export function PageHeader(){
    return (
        <>
            <Container>
                <Navbar>
                    <List>
                        <Item>INICIO</Item>
                        <Item>PROJETOS</Item>
                        <Item>CONTATO</Item>
                    </List>
                </Navbar>
            </Container>
        </>
    )
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;

    display: flex;
    justify-content: center;

`

const Navbar = styled.nav`
    height: 100%;
    width: 100%;
    max-width: 1280px;

    display: flex;
    padding: 0 2rem;

    background-color: #000
`

const List = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

const Item = styled.li`

`