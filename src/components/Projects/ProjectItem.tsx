import { useState } from "react"
import styled from "styled-components"
import { IoDesktopOutline, IoPhonePortraitOutline, IoTabletPortraitOutline } from "react-icons/io5"
import { GoTriangleUp } from "react-icons/go"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

interface IProps {
    itemData: {
        title: string
        links: {
            live: string
            gitub: string
        },
        folder: string
        devices: {
            mobile: boolean
            tablet: boolean
            desktop: boolean
        }
        desc: () => JSX.Element
        skills: {
            name: string;
            icon: () => JSX.Element;
        }[]
    }
}

export function ProjectItem({ itemData }: IProps) {

    const deviceList = Object.keys(itemData.devices).filter(key => itemData.devices[key as keyof typeof itemData.devices]);
    const [selectedDevice, setSelectedDevice] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    function deviceIconHandler(device: string) {
        switch (device) {
            case "mobile": return <IoPhonePortraitOutline />
            case "tablet": return <IoTabletPortraitOutline />
            case "desktop": return <IoDesktopOutline />
            default: return <IoPhonePortraitOutline />
        }
    }

    return (
        <>
            <Item>
                <Header>
                    <span>
                        {itemData.title}
                    </span>
                </Header>
                <SubHeader>
                    <SkillsContainer>
                        <ul>
                            {
                                Array(...itemData.skills, ...itemData.skills).map((skill, index) =>
                                    <li key={index}>
                                        <span>{skill.icon()}</span>
                                        <span>{skill.name}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </SkillsContainer>
                </SubHeader>
                <HorizontalRule />
                <PreviewSection>
                    <DeviceSelectorContainer>
                        <DeviceSelectorWrapper deviceListLength={deviceList.length} showInfo={showInfo}>

                            {
                                deviceList.map((device, index) =>
                                    <DeviceSelectorButton
                                        isSelected={device.includes(deviceList[selectedDevice])}
                                        onClick={() => setSelectedDevice(index)}
                                    >
                                        {deviceIconHandler(device)}
                                    </DeviceSelectorButton>
                                )
                            }
                            <SelectorBox selectedDevice={selectedDevice} deviceListLength={deviceList.length}>
                                <div>
                                    <TopTriangle />
                                    <BottomTriangle />
                                </div>
                            </SelectorBox>
                        </DeviceSelectorWrapper>
                        <AlertBar showInfo={showInfo}>
                            <div></div>
                        </AlertBar>
                    </DeviceSelectorContainer>
                    <DevicesContainer showInfo={showInfo}>
                        <div>
                            <DevicesWrapper
                                selectedDevice={selectedDevice}
                            >
                                {
                                    deviceList.map((device, index) =>
                                        <div
                                            key={index}
                                            className={device}
                                        >
                                            <img src={`/images/projects/${itemData.folder}/${device}.png`} />
                                        </div>
                                    )
                                }
                            </DevicesWrapper>
                            <DescriptionContainer showInfo={showInfo}>
                                <p>
                                    {itemData.desc()}
                                </p>
                            </DescriptionContainer>
                        </div>
                    </DevicesContainer>
                </PreviewSection>
                <HorizontalRule />
                <InfoSection>
                    <InfoButtonContainer
                        showInfo={showInfo}
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        <CircleWrapper showInfo={showInfo}>
                            <InfoButton>
                                info
                            </InfoButton>
                            <div className="dotted-border"></div>
                            <div className="radius-borders">
                                <div>
                                    <div />
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </div>
                        </CircleWrapper>
                        <TextContainer showInfo={showInfo}>
                            <div>
                                <div>
                                    {showInfo ? "MENOS" : "MAIS"}
                                </div>
                            </div>
                        </TextContainer>
                    </InfoButtonContainer>
                    <LinksContainer>
                        <div>
                            <span>L</span>
                            <span>I</span>
                            <span>N</span>
                            <span>K</span>
                        </div>
                        <LinksWrapper>
                            <a href={itemData.links.gitub} target="_blank">
                                <AiOutlineGithub />
                            </a>
                            <a href={itemData.links.live} target="_blank">
                                <AiOutlineLink />
                            </a>
                        </LinksWrapper>
                    </LinksContainer>
                </InfoSection>
                <Overlay />
            </Item>
        </>
    )
}

const Item = styled.li`
    width: 100%;
    border: 0.1rem solid #09C8DA;
    box-shadow:  rgba(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px  rgb(9, 200, 218, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative
`

const HorizontalRule = styled.hr`
    width: 100%;
    border: 0;
    padding: 1rem;

    &::after {
        content:"";
        display: block;
        width: 100%;
        height: 0.1rem;
        background-color: rgba(9, 200, 218, 0.4);
        box-shadow:  rgba(9, 200, 218, 0.4) 0 0 10px;
    }

`

const Header = styled.div`
    width: 100%;
    padding: 1rem;

    & > span {
        width: 100%;
        display: flex;
        justify-content: center;

        background-color:rgba(255,255,0,0.2);
        color: rgba(255,255,0, 1);
        box-shadow:  rgba(255,255,0, 0.2) 0 0 10px;
        text-shadow: 0 0 10px rgba(255,255,0, 1);
        text-align: center;
        text-transform: uppercase;
        font-family: Gugi, sans-serif;
        font-size: 1.4rem;
    }
`

const SubHeader = styled.div`
    
    text-shadow: 0 0 10px rgba(255,255,0, 1);

    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    font-family: Gugi, sans-serif;
    padding: 0.4rem 1rem;
`

const SkillsContainer = styled.div`

    width: 28.8rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    & > ul {
        display: flex;
        gap: 2rem;
        position: absolute;
        left: 0;

        animation: scroll 10s linear infinite;

        @keyframes scroll {
            from {transform: translateX(0)}
            to {transform: translateX(-51%)}
        }

        & > li {
            display: flex;
            gap: 0.4rem;

            font-size: 1.6rem;
            font-family: Gugi, sans-serif;
            font-weight: 400;

            & > span {
                display: flex;
                align-items: center;
                color: rgba(9, 200, 218, 1);
                text-shadow: 0 0 10px rgba(9, 200, 218, 1);

                & > svg {
                    filter: drop-shadow(0 0 2px rgba(9, 200, 218, 1));
                }
            }
        }
    }
`

const Overlay = styled.div`
    width:100%;
    height:100%;
    z-index:9999;
    position:absolute;
    left:0;
    top:0;
    background-image: repeating-linear-gradient(rgba(0,0,0,0.3) 0,transparent 1px,transparent 2px,rgba(0,0,0,0.3) 3px);
    pointer-events: none
`

const PreviewSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
`

const DevicesWrapper = styled.div<{ selectedDevice: number }>`
    display: grid;
    grid-template-columns: repeat(3, 234px);
    grid-template-rows: 20rem;
    justify-items: center;
    align-items: center;

    transition: 0.3s transform;
    transform: translateX(calc( -234px * ${props => props.selectedDevice} ));

    & > div {
        display: flex;
        jusity-content: center;
        align-items: center;
        position: relative;

        border: 0.1rem solid #09C8DA;
        box-shadow:  rgb(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px  rgb(9, 200, 218, 0.7) ;

        padding: 0.4rem;
    }

`

const DescriptionContainer = styled.div<{ showInfo: boolean }>`
    height: 20rem;
    background-color: rgba(9, 200, 218, 0.2);
    border: 0.1rem solid rgba(9, 200, 218, 1);
    padding: 0.4rem 1rem;
    margin-left: 1rem;
    
    font-family: Gugi, sans-serif;
    font-size: 1.2rem;
    text-align: justify;

    & > p {
        overflow: hidden;
        // white-space: nowrap;

        animation: ${props => props.showInfo && "typing" } 2s linear forwards;
        @keyframes typing {
            from { height: 0%}
            to { height: 100%}
        }
    }

    & a {
        color: rgba(9, 200, 218, 0.7 );
        text-decoration: underline;

        :hover {
            color: rgba(9, 200, 218, 1 );

        }
    }

`

const DevicesContainer = styled.div<{ showInfo: boolean }>`
    width: 100%;
    height: 20rem;
    overflow: hidden;

    & > div {
        display: flex;
        flex-direction: column;
        transform: translateY(${props => props.showInfo ? "-20" : "0"}rem);
        transition: 0.3s transform;
    }
    
    & .tablet {

        & > img {
            border-radius: 1rem;
            width: 11rem;
            height: calc(11rem * 1.6);
            border-radius: 1rem;
        }
    }

    & .mobile {
        & > img {
            width: 8rem;
            height: calc(8rem * 2.16);
            border-radius: 1rem;
        }
    }

    & .desktop {
        & > img {
            width: 20rem;
            height: calc(20rem * 0.625);
            border-radius: 1rem;
        }
    }
`

const DeviceSelectorContainer = styled.div`
    padding: 0 2rem 0 1.4rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;

    position: relative;
`

const DeviceSelectorWrapper = styled.div<{ deviceListLength: number; showInfo: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: ${props => props.deviceListLength * 40 + (props.deviceListLength - 1) * 10}px;

    transform: rotateY(${props => props.showInfo ? "180" : "360"}deg);

    transition: 0.3s transform;

`

const AlertBar = styled.div<{ showInfo: boolean }>`
    width: 5.8rem;
    height: 16rem;
    background-color: rgb(16,16,16);
    padding: 0 1rem;
    position: absolute;
    overflow: hidden;

    transform: rotateY(${props => props.showInfo ? "360" : "180"}deg);
    z-index: ${props => props.showInfo ? "0" : "-1"};

    transition: 0.3s transform, 0.3s z-index;

    & > div {
        width: 100%;
        height: 18.9rem;
        box-shadow:  rgba(255,255,0, 0.4) 0 0 10px;
        text-shadow: 0 0 10px rgba(255,255,0, 1);
        background: repeating-linear-gradient(
                                45deg,
                                rgba(255,255,0, 1),
                                rgba(255,255,0, 1) 10px,
                                rgba(255,255,0, 0.2) 10px,
                                rgba(255,255,0, 0.2) 20px
                            );


        animation: slide 1s linear infinite;
        @keyframes slide {
            from {transform: translateY(-2.8rem)}
            to {transform: translateY(0)}
        }
        
    }

`

const SelectorBox = styled.div<{ selectedDevice: number, deviceListLength: number }>`
    pointer-events: none;
    width: 5rem;
    height: 4rem;

    transform: translate(-50%, -50%);
    left: 50%;
    top: ${props =>
        ((props.deviceListLength * 40) / props.deviceListLength / 2)
        + (((props.deviceListLength * 40) / props.deviceListLength) * props.selectedDevice + (props.selectedDevice * 10))
    }px;

    transition: 0.3s top;

    position: absolute;

    & > div {
        width: 100%;
        height: 100%;
        position: relative;
    }
`

const TopTriangle = styled(GoTriangleUp)`
    color:#09C8DA;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    filter: drop-shadow(0 0 1px rgb(9, 200, 218, 0.7));
`

const BottomTriangle = styled(GoTriangleUp)`
    color:#09C8DA;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%) rotate(-90deg);
    filter: drop-shadow(0 0 1px rgba(9, 200, 218, 1));
`

const DeviceSelectorButton = styled.div<{ isSelected: boolean }>`
    cursor: pointer;
   
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${(props) => props.isSelected ? "rgba(255,255,0,1)" : "rgba(255,255,0,0.4)"};

    & svg {
        filter: ${(props) => props.isSelected ? "drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))" : "drop-shadow(0 0 0 rgba(255, 255, 0, 0.7))"};
        font-size: 4rem;
        transition: 0.3s filter;
    }
`

const InfoSection = styled.div`
    padding: 0.4rem 2rem 0.4rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.1rem solid #09C8DA;
    box-shadow:  rgba(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px  rgb(9, 200, 218, 0.7);

    & > div:first-child{
        background-color:rgba(9, 200, 218, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Gugi, sans-serif;
        gap: 1rem;
        color: #09C8DA;

        &> span{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
`

const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;

    & > a {

        font-size: 3rem;
        color: rgba(148, 37, 99, 1);
        width: 4rem;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        & > svg {
            color: rgba(169, 0, 255, 1);
            filter: drop-shadow(0 0 2px rgba(169, 0, 255, 1));
        }

        :hover {
            background:
            linear-gradient(to right, rgba(169, 0, 255, 1) 2px, transparent 1px) 0 0,
            linear-gradient(to right, rgba(169, 0, 255, 1) 2px, transparent 1px) 0 100%,
            linear-gradient(to left, rgba(169, 0, 255, 1) 2px, transparent 1px) 100% 0,
            linear-gradient(to left, rgba(169, 0, 255, 1) 2px, transparent 1px) 100% 100%,
            linear-gradient(to bottom, rgba(169, 0, 255, 1) 2px, transparent 1px) 0 0,
            linear-gradient(to bottom, rgba(169, 0, 255, 1) 2px, transparent 1px) 100% 0,
            linear-gradient(to top, rgba(169, 0, 255, 1) 2px, transparent 1px) 0 100%,
            linear-gradient(to top, rgba(169, 0, 255, 1) 2px, transparent 1px) 100% 100%;

            background-repeat: no-repeat;
            background-size: 10px 10px;
        }
    }
`

const InfoButton = styled.div`
    width: 0.3rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: Gugi, sans-serif;
    color:rgba(255, 255, 255, 1);
    text-shadow: 0 0 2px rgba(255, 255, 255, 1);
    font-weight: bold;

    transition: 0.3s width;
`

const CircleWrapper = styled.div<{ showInfo: boolean }>`
    background-color: rgb(16, 16, 16);
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 1.2rem;

    & > .dotted-border {
        width: 80%;
        height: 80%;
        position: absolute;

        box-shadow:  rgba(255,255,0, 0.2) 0 0 10px;
        border: 0.2rem dashed rgba(255,255,0, 1);
        border-radius: 100%;
        transition: 0.3s transform ease-out, 0.3s height, 0.3s width;
    }

    & > .radius-borders {
        position: absolute;
        width: 100%;
        height: 100%;

        transform: rotate(${props => props.showInfo ? "45" : "0"}deg);
        transition: 0.3s transform;

        & > div {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: relative;

            & > div {
                width: 50%;
                height: 50%;
                position: absolute;
                border: 2px solid rgba(9, 200, 218, 1);
                transition: 0.3s transform;
            }

            & > div:nth-child(1){  
                top: 0;
                left: 0;
                border-right: 0;
                border-bottom: 0;
                border-radius: 100px 0 0 0;
            }
            div:nth-child(2){
                top: 0;
                right: 0;
                border-left: 0;
                border-bottom: 0;
                border-radius:  0 100px 0 0;
            }
            div:nth-child(3){
                bottom: 0;
                right: 0;
                border-left: 0;
                border-top: 0;
                border-radius:  0 0 100px 0;
            }
            div:nth-child(4){
                bottom: 0;
                left: 0;
                border-right: 0;
                border-top: 0;
                border-radius:  0 0 0 100px;
            }
        }
    }
`

const TextContainer = styled.div<{ showInfo: boolean }>`

    padding: 0rem;
    border: 0.1rem solid #09C8DA;
    border-radius: 0.4rem;
    border-right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s width, 0.3s height, 0.3s padding;

    & > div {
        width: 7.4rem;
        height: 2.4rem;
        
        & > div {
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            font-family: Gugi, sans-serif;
            font-size: 1.2rem;
            letter-spacing: 0.4rem;

            color: ${props => props.showInfo ? "rgba(255,255,0, 1)" : "rgba(9, 200, 218, 1)"};
            text-shadow:  ${props => props.showInfo ? "0 0 10px rgba(255,255,0, 1)" : "0 0 10px rgba(9, 200, 218, 0.8)"};
            background-color: ${props => props.showInfo ? "rgba(255,255,0,0.2)" : " rgba(9, 200, 218, 0.4)"};
            box-shadow: ${props => props.showInfo ? "rgba(255,255,0, 0.2) 0 0 10px" : "0 0 10px rgba(9, 200, 218, 0.4)"};

            transition: 0.3s color, 0.3s text-shadow, 0.3s background-color, 0.3s box-shadow;
        }  
    }

    
`

const InfoButtonContainer = styled.div<{ showInfo: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    padding-right: 0.2rem;    
    cursor: pointer;
    

    :hover {

        ${InfoButton} {
            width: 2.2rem;
        }

        .dotted-border{
            width: 100%;
            height: 100%;
            transform: rotate(calc(-360deg * 2));
        }

        .radius-borders {
            & > div {
                div:nth-child(1){
                    transform: translate(-25%, -25%);
                }
                div:nth-child(2){
                    transform: translate(25%, -25%);

                }
                div:nth-child(3){
                    transform: translate(25%, 25%);

                }
                div:nth-child(4){
                    transform: translate(-25%, 25%);
                } 
            }
        }

        ${TextContainer} {
            padding: 0.6rem;

            & > div {
                animation: ${props => props.showInfo ? "yellow-flicker" : "blue-flicker"} 1s linear forwards;
                @keyframes yellow-flicker {
                    0% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.2);
                        box-shadow:rgba(255,255,0, 0.2) 0 0 10px;

                    }
                    80% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.4);
                        box-shadow:rgba(255,255,0, 0.4) 0 0 10px;
                    }
                    85% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.2);
                        box-shadow:rgba(255,255,0, 0.2) 0 0 10px;
                    }
                    90% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.4);
                        box-shadow:rgba(255,255,0, 0.4) 0 0 10px;
                    }
                    95% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.2);
                        box-shadow:rgba(255,255,0, 0.2) 0 0 10px;
                    }
                    100% {
                        color: rgba(255,255,0, 1);
                        text-shadow: 0 0 10px rgba(255,255,0, 1);
                        background-color: rgba(255,255,0,0.4);
                        box-shadow:rgba(255,255,0, 0.4) 0 0 10px;
                    }
                }
                @keyframes blue-flicker {
                    0% {
                        color: rgba(9, 200, 218, 0.8);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 0.8);
                        background-color: rgba(9, 200, 218, 0.2);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.2);
                    }
                    80% {
                        color: rgba(9, 200, 218, 1);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 1);
                        background-color: rgba(9, 200, 218, 0.4);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.4);
                    }
                    85% {
                        color: rgba(9, 200, 218, 0.8);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 0.8);
                        background-color: rgba(9, 200, 218, 0.2);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.2);
                    }
                    90% {
                        color: rgba(9, 200, 218, 1);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 1);
                        background-color: rgba(9, 200, 218, 0.4);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.4);
                    }
                    95% {
                        color: rgba(9, 200, 218, 0.8);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 0.8);
                        background-color: rgba(9, 200, 218, 0.2);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.2);
                    }
                    100% {
                        color: rgba(9, 200, 218, 1);
                        text-shadow: 0 0 10px rgba(9, 200, 218, 1);
                        background-color: rgba(9, 200, 218, 0.4);
                        box-shadow: 0 0 4px rgba(9, 200, 218, 0.4);
                    }
                }
            }
        }

    }
`

