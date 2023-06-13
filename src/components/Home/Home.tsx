import { useEffect, useState } from "react"
import styled from "styled-components"
import { MountainSVG } from "./MountainSVG";

export function Home() {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window])

    return (
        <>
            <Container>
                <Background>
                    <Sky>
                        {/* <Mountain width={windowWidth} speed="20" elementColor=""/>
                        <Mountain width={windowWidth} speed="30" elementColor="rgb(11 15 59)"/>
                        <Mountain width={windowWidth} speed="40" elementColor="rgb(148 37 99)"/> */}
                        <Mountain width={windowWidth} speed="80">
                            <MountainSVG elementColor="rgb(148 37 99)" />
                            <MountainSVG elementColor="rgb(148 37 99)" />
                        </Mountain>
                        <Mountain width={windowWidth} speed="60" >
                            <MountainSVG elementColor="rgb(11 15 59)" />
                            <MountainSVG elementColor="rgb(11 15 59)" />
                        </Mountain>
                        <Mountain width={windowWidth} speed="30">
                            <MountainSVG />
                            <MountainSVG />
                        </Mountain>
                    </Sky>
                    <Grid>
                        <div />
                    </Grid>
                </Background>
                <Sun>
                    <div className="large-string">
                        <div />
                        <div />
                    </div>
                    <div className="thin-string">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </Sun>
                <TextContainer>
                    <TextWrapper>
                        <h1>
                            <TextSpan dataText="DESENVOLVEDOR">
                                DESENVOLVEDOR
                            </TextSpan>
                            <TextSpan dataText="FRONTEND">
                                FRONTEND
                            </TextSpan>
                        </h1>
                    </TextWrapper>
                </TextContainer>

            </Container>
        </>
    )
}

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const Sun = styled.div`
    width:200px;
    height:200px;
    border-radius:100%;
    position:absolute;
    background-color:yellow;
    left: 50%;
    top: 20%;
    bottom:40%;
    transform:translateX(-50%);

    background-image: linear-gradient(red,yellow),linear-gradient(black,white);

    clip-path:polygon(-50% 0px,150% -50%,150% 55%,-50% 55%,
        -50% 62%,150% 62%,150% 70%,0 70%,
        -50% 75%,150% 75%,150% 80%,0 80%,
        -50% 82%,150% 82%,150% 85%,0 85%,
        -50% 87%,150% 87%,150% 90%,0 90%,
        -50% 92%,150% 92%,150% 95%,0 95%,
        -50% 96%,150% 96%,150% 150%,0 150%);
        box-shadow: rgba(255,128,0,0.7) 0px 0 20px;
`

const TextContainer = styled.div`
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const TextWrapper = styled.div`
    position: relative;

    & > h1 {
        display: flex;
        flex-direction: column;
        align-items: center;

        // font-family:"Montserrat";
        font-size: 3.6rem;
        font-weight: 900;

        @media (min-width: 600px) {
            font-size: 8rem;
        }
    }    
`

const TextSpan = styled.span<{ dataText: string }>`
    background-image:linear-gradient(#2989cc 0%, #d3e5ec 50%,#592451 51%,#b3628d 55%,#592451 59%,#b3628d 65%,#ac86a6 75%, #b3628d 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent; 
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(255,255,255,0.4);
    position: relative;

    &::before {
        content: "${(props) => props.dataText}";
        text-shadow: -1px -1px 1px #2989cc,-2px -2px 1px #2989cc, -3px -3px 1px #2989cc, 1px 1px 1px #000, 0px -1px 2px #000, -1px -2px 2px #000, 0 0 5px rgba(255,255,255,1); 
        opacity:1;
        position: absolute;
        z-index: -1;
    }

    &::after {
        content: "${(props) => props.dataText}";
        background-image: linear-gradient(225deg,transparent 53%,white 55%,transparent 58%);
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        -webkit-background-clip:text;
        z-index:999;
        background-size: 400% 400%;
        animation:shine 5s normal ease infinite;
    }

    @keyframes shine{
        0%{background-position:0% 100%}
        100%{background-position:100% 0%}
    }
`
const Background = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Sky = styled.div`
    width: 200%;
    height: 60%;
    background: linear-gradient(to bottom, #010310 0,#0c1142 24%,#45125e 35%,#d53567 55%,#f0c3d9 60%) fixed;

    position: relative;
`

const Mountain = styled.div<{width: number; speed: string}>`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: flex-end;

    animation: move ${props => props.speed}s linear infinite;

    @keyframes move {
        from { transform: translateX(0) }
        to { transform: translateX(-${props => props.width}px) }
    }

    & > svg {
        width: ${props => props.width}px;
        display: flex;
        align-items: flex-end;
    }
`

const Grid = styled.div`
    width: 100%;
    height: 40%;
    position: relative;

    background-color: #0c1142;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;

    & > div {

        --grid-color:rgba(115,59,139,0.7);
        --grid-size: 40px;
        --grid-blur: 1px;

        position:absolute;
        bottom: -10px;
        left:0;
        margin-left: -50%;
        width: 200%;
        height: 160%;
        background-position-y: 0px;
        background-image:
                repeating-linear-gradient(90deg,var(--grid-color,black) 0%,transparent calc(1px + var(--grid-blur,0px)), transparent var(--grid-size),var(--grid-color,black) calc(var(--grid-size) + 1px + var(--grid-blur,0px))),repeating-linear-gradient(180deg,var(--grid-color,black) 0%,transparent calc(1px + var(--grid-blur,0px)), transparent var(--grid-size),var(--grid-color,black) calc(var(--grid-size) + 1px + var(--grid-blur,0px)));
        
        transform:perspective(50vh) rotateX(60deg) translateZ(10px);

        animation:moving-grid 0.5s infinite linear;
        
        @keyframes moving-grid{
            0%{
            transform:perspective(50vh) rotateX(60deg) translateZ(10px) translateX(var(--grid-size));
            }
            100%{
            transform:perspective(50vh) rotateX(60deg) translateZ(10px) translateX(-var(--grid-size));
            }
        }
    }
    
`