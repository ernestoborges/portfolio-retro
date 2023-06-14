import { useState } from "react"
import styled from "styled-components"
import { IoDesktopOutline, IoPhonePortraitOutline, IoTabletPortraitOutline } from "react-icons/io5"
import { GoTriangleUp } from "react-icons/go"

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
                    {itemData.title}
                </Header>
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
                <Overlay />
            </Item>
        </>
    )
}

const Item = styled.li`
    width: 30rem;
    border: 0.1rem solid #09C8DA;
    padding: 1rem;
    
    box-shadow:  rgb(9, 200, 218, 0.7) 0 0 10px, inset 0 0 10px  rgb(9, 200, 218, 0.7) ;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: relative

`

const Header = styled.div`
    background-color:rgba(255,255,0,0.4);
    color: rgba(255,255,0, 1);
    box-shadow:  rgba(255,255,0,0.4) 0 0 10px;
    text-shadow: 0 0 10px rgba(255,255,0, 1);

    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: Gugi, sans-serif;
    font-size: 1.4rem;
    padding: 0.4rem 0;
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

const DevicesWrapper = styled.div<{ selectedDevice: number }>`
    display: grid;
    grid-template-columns: 280px 280px 280px;
    justify-items: center;
    align-items: center;

    transition: 0.3s transform;
    transform: translateX(calc( -280px * ${props => props.selectedDevice} ));

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

    width: 100%;
    height: 28rem;
    display: flex;
    align-items: center;
    overflow: hidden;
   
    & .tablet {

        & > img {
            border-radius: 1rem;
            width: 16rem;
            height: calc(16rem * 1.6);
            border-radius: 1rem;
        }
    }

    & .mobile {
        & > img {
            width: 10rem;
            height: calc(10rem * 2.16);
            border-radius: 1rem;
        }
    }

    & .desktop {
        & > img {
            width: 26rem;
            height: calc(26rem * 0.625);
            border-radius: 1rem;
        }
    }
`

const DeviceSelectorContainer = styled.div`
    padding: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: center;
`

const DeviceSelectorWrapper = styled.div<{ deviceListLength: number }>`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: ${props => props.deviceListLength * 40 + (props.deviceListLength - 1) * 10}px
`

const SelectorBox = styled.div<{ selectedDevice: number, deviceListLength: number }>`
    pointer-events: none;
    width: 6rem;
    height: 7rem;

    transform: translate(-50%, -50%);
    top: 50%;
    left: ${props =>
        ((props.deviceListLength * 40) / props.deviceListLength / 2) 
        + (((props.deviceListLength * 40) / props.deviceListLength ) * props.selectedDevice + ( props.selectedDevice * 10) )
    }px;

    transition: 0.3s left;

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
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    filter: drop-shadow(0 0 1px rgb(9, 200, 218, 0.7));
`
const BottomTriangle = styled(GoTriangleUp)`
    color:#09C8DA;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0 1px rgb(9, 200, 218, 1));

`

const DeviceSelectorButton = styled.div<{ isSelected: boolean }>`
    cursor: pointer;
   
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${(props) => props.isSelected
        ? "rgba(255,255,0,1)"
        : "rgba(255,255,0,0.4)"};

    & svg {
        filter: ${(props) => props.isSelected
        ? "drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))"
        : "drop-shadow(0 0 0 rgba(255, 255, 0, 0.7))"};
        font-size: 4rem;
        transition: 0.3s filter;
    }
`