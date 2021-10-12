import React from 'react'
import PhotoNavbar from '../../../components/PhotoNavbar'
import Image from 'next/image'
import styled from 'styled-components'


const colors = {
    gray: '#393939',
    orange: '#6C391C',
    purple: '#603B57',
    darkorange: '#633F1D',
    red: '#646F1F',
    blue: '#2D3F45',
    darkyellow: '#5B5232',
    green: '#426639',
    darkgreen: '#5B605B',
    lightblue: '#184157'
}

const photoPath = `/image/photography/nature`

const ImageWrapper = styled.div`
    display:flex;
    padding: 6px;
`;

const StyledImage = styled(Image)`
    display: flex;
    padding: 10px;
    border-radius: 7px;
    margin: 5px;
    bottom: 10px;
`;
const Photos = styled.div`
    display:flex;
    flex-direction: column;
`;

const GraytoOrange = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#393939, #6C391C);
    padding: 10px;
`
const OrangetoPurple = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#6C391C, #603B57);
    padding: 10px;
`


const PurpleToRed = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#603B57, #633F1D);
    padding: 10px;
`
const RedToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#633F1D, #2D3F45);
    padding: 10px;
`
const BlueToYellow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#2D3F45, #5B5232);
    padding: 10px;
`
const YellowToGreen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#5B5232, #426639);
    padding: 10px;
`
const GreenToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#426639, #184157);
    padding: 10px;
`



const index = () => {
    return (
        <div>
            <PhotoNavbar color = {colors.gray}/>
            <Photos>
                <GraytoOrange>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw1.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw2.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw3.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw4.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw5.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw6.jpg`} width="525px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw7.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw8.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw9.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw10.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw11.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw12.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw13.jpg`} width="517px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw14.jpg`} width="517px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw15.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/B&W/bw16.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </GraytoOrange>
                <OrangetoPurple>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun1.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun2.jpg`} width="793px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun3.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun4.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun5.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun6.jpg`} width="245px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun7.jpg`} width="524px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun8.png`} width="1330px" height="371px" quality={100}  layout = "fixed" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun9.jpg`} width="523px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun10.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun11.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun12.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun13.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun14.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun15.jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun16.jpg`} width="512px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun17.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun18.jpg`} width="796px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/sun/sun19.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </OrangetoPurple>
                <PurpleToRed>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night1.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night2.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night3.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night4.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night5.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night7.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night8.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night9.jpg`} width="241px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night10.jpg`} width="652px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night11.jpg`} width="650px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night12.jpg`} width="1327px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night13.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night14.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night15.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night16.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night17.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night18.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night19.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night20.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </PurpleToRed>
                <RedToBlue>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night21.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night22.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night23.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night24.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night25.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night26.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night27.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night28.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night29.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night30.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night31.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/night32.jpg`} width="244pxx" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </RedToBlue>
                <BlueToYellow>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day1.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day2.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day3.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day4.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day5.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day6.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day7.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day8.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day9.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day10.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day11.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day12.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day13.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day14.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day15.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day16.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day17.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day18.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day19.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day20.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day21.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day22.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day23.jpg`} width="795px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day24.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                        <StyledImage src ={`${photoPath}/daytime/day25.jpg`} width="1326px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                </BlueToYellow>
                <YellowToGreen>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green1.jpg`} width="517px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green2.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green3.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green4.jpg`} width="517px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green5.jpg`} width="655px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green6.jpg`} width="744px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green7.jpg`} width="655px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green8.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green9.jpg`} width="790px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green10.jpg`} width="240px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green11.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/greens/green12.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </YellowToGreen>
                <GreenToBlue>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue1.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue2.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue3.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue4.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue5.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue6.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue7.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue8.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue9.jpg`} width="244px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue10.jpg`} width="655px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blues/blue11.jpg`} width="655px" height="371px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </GreenToBlue>
                
            </Photos>
        </div>
    )
}

export default index
