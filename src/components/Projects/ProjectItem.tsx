import { useState } from "react"
import styled from "styled-components"
import { IoDesktopOutline, IoPhonePortraitOutline, IoTabletPortraitOutline } from "react-icons/io5"
import { GoTriangleUp } from "react-icons/go"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

interface IProps {
    itemData: {
        title: string
        folder: string
        devices: {
            mobile: boolean
            tablet: boolean
            desktop: boolean
        }
    }
}

export function ProjectItem({ itemData }: IProps) {

    const deviceList = Object.keys(itemData.devices).filter(key => itemData.devices[key as keyof typeof itemData.devices]);
    const [selectedDevice, setSelectedDevice] = useState(0);

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
                    <a href="">
                        <AiOutlineGithub />
                    </a>
                    <a href="">
                        <AiOutlineLink />
                    </a>
                </SubHeader>
                <PreviewSection>

                    <DeviceSelectorContainer>
                        <DeviceSelectorWrapper deviceListLength={deviceList.length}>

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
                    </DeviceSelectorContainer>
                    <DevicesContainer>
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
                    </DevicesContainer>
                </PreviewSection>

                <Overlay />
            </Item>
        </>
    )
}

const Item = styled.li`
    width: 100%;
    border: 0.1rem solid #09C8DA;
    
    box-shadow:  rgb(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px  rgb(9, 200, 218, 0.7) ;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative

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
    color: rgba(148, 37, 99, 1);
    
    text-shadow: 0 0 10px rgba(255,255,0, 1);

    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    font-family: Gugi, sans-serif;
    font-size: 3rem;
    padding: 0.4rem 2rem;

    & > a {
        width: 4rem;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            color: rgba(169, 0, 255, 0.6);
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

            & > svg {
                color: rgba(169, 0, 255, 1);
                text-shadow: 0 0 10px rgba(169, 0, 255, 1);
                filter: drop-shadow(0 0 2px rgba(169, 0, 255, 1));
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
    align-items: flex-start;
`

const DevicesWrapper = styled.div<{ selectedDevice: number }>`
    display: grid;
    grid-template-columns: repeat(3, 240px);
    justify-items: center;
    align-items: center;

    transition: 0.3s transform;
    transform: translateX(calc( -240px * ${props => props.selectedDevice} ));

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

const DevicesContainer = styled.div`

    width: 24rem;
    display: flex;
    align-items: center;
    overflow: hidden;
   
    & .tablet {

        & > img {
            border-radius: 1rem;
            width: 12rem;
            height: calc(12rem * 1.6);
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
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

const DeviceSelectorWrapper = styled.div<{ deviceListLength: number }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: ${props => props.deviceListLength * 40 + (props.deviceListLength - 1) * 10}px
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
        filter: ${(props) => props.isSelected
            ? "drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))"
            : "drop-shadow(0 0 0 rgba(255, 255, 0, 0.7))"};
            font-size: 4rem;
            transition: 0.3s filter;
    }
    
`