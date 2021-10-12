import React from 'react'
import PhotoNavbar from '../../../components/PhotoNavbar'
import styled from 'styled-components'
import Image from 'next/image'


const colors = {
    purple: '#7D3457',
    darkorange: '#714730',
    orange: '#582F21',
    gray: '#464646',
    darkgray: '#474747',
    darkgreen: '#303826',
    darkyellow: '#3B3830',
    blue: '2F3D45'
}

const photoPath = `/image/photography/people`

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

const ColumnBreak = styled.div`
    display: flex;
    flex-direction: column;
`;
const RowBreak = styled.div`
    display: flex;
    flex-direction: row;
`;


const PurpletoOrange = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#7D3457, #714730);
    padding: 10px;
`
const OrangeToGray = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#714730, #582F21, #464646);
    padding: 10px;
`
const GrayToGreen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#464646, #474747, #303826);
    padding: 10px;
`
const GreenToYellow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#303826, #3B3830);
    padding: 10px;
`
const YellowToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#3B3830, #2F3D45);
    padding: 10px;
`


const index = () => {
    return (
        <div>
            <PhotoNavbar color={colors.purple} />
            <Photos> 
            <PurpletoOrange>
            <RowBreak>
            <ImageWrapper>
                <StyledImage src ={`${photoPath}/purple1.jpg`} width="699px" height="942px" quality={100}  layout = "intrinsic" loading="eager" />
            </ImageWrapper>
                <ColumnBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/purple2.jpg`} width="300px" height="453px" quality={100}  layout = "intrinsic" loading="eager" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/purple3.jpg`} width="300px" height="453px" quality={100}  layout = "intrinsic" loading="eager" />
                    </ImageWrapper>
                </ColumnBreak>
                <ColumnBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/purple4.jpg`} width="300px" height="453px" quality={100}  layout = "intrinsic" loading="eager" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/purple5.jpg`} width="300px" height="453px" quality={100}  layout = "intrinsic" loading="eager"/>
                    </ImageWrapper>
                </ColumnBreak>
            </RowBreak>
            <ImageWrapper>
                <StyledImage src ={`${photoPath}/purple6.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" loading="eager" />
            </ImageWrapper>
            <ImageWrapper>
                <StyledImage src ={`${photoPath}/purple7.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" loading="eager" />
            </ImageWrapper>
            <ImageWrapper>
                <StyledImage src ={`${photoPath}/purple8.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" loading="eager" />
            </ImageWrapper>
            <ImageWrapper>
                <StyledImage src ={`${photoPath}/purple9.jpg`} width="531px" height="371px" quality={100}  layout = "intrinsic" loading="eager" />
            </ImageWrapper>
            <RowBreak>

            <ColumnBreak>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/purple10.jpg`} width="522px" height="355px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/purple11.jpg`} width="523px" height="824px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
            </ColumnBreak>
            </RowBreak>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/purple12.jpg`} width="802px" height="1204px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
            </PurpletoOrange>
            <OrangeToGray>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/orange1.jpg`} width="802px" height="1219px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <RowBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/orange2.jpg`} width="249px" height="375px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/orange3.jpg`} width="249px" height="375px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </RowBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/orange4.jpg`} width="523px" height="818px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
            </OrangeToGray>
            <GrayToGreen>
                   <ColumnBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/gray1.jpg`} width="523px" height="818px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <RowBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray2.jpg`} width="246px" height="373px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray3.jpg`} width="246px" height="373px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                    </RowBreak>
                   </ColumnBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray4.jpg`} width="802px" height="1221px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray5.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray6.jpg`} width="522px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray7.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray8.jpg`} width="1350px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray9jpg`} width="243px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray10.jpg`} width="525px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray11.jpg`} width="525px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray12.jpg`} width="525px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <RowBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray12.jpg`} width="795px" height="371px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ColumnBreak>
                            <RowBreak>
                                <ImageWrapper>
                                    <StyledImage src ={`${photoPath}/gray13.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                                </ImageWrapper>
                                <ImageWrapper>
                                    <StyledImage src ={`${photoPath}/gray14.jpg`} width="250px" height="371px" quality={100}  layout = "intrinsic" />
                                </ImageWrapper>
                            </RowBreak>
                                <ImageWrapper>
                                    <StyledImage src ={`${photoPath}/gray15.jpg`} width="530px" height="824px" quality={100}  layout = "intrinsic" />
                                </ImageWrapper>
                        </ColumnBreak>
                        </RowBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray16.jpg`} width="431px" height="622px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray17.jpg`} width="431px" height="622px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/gray18.jpg`} width="431px" height="622px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
            </GrayToGreen>
            <GreenToYellow>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/green1.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/green2.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/green3.jpg`} width="247px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/green4.jpg`} width="533px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <ImageWrapper>
                    <StyledImage src ={`${photoPath}/green5.jpg`} width="1351px" height="371px" quality={100}  layout = "intrinsic" />
                </ImageWrapper>
                <RowBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green6.jpg`} width="663px" height="1001px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green7.jpg`} width="663px" height="1001px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </RowBreak>
                <ColumnBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green8.jpg`} width="663px" height="440px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green9.jpg`} width="663px" height="440px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                </ColumnBreak>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green10.jpg`} width="663px" height="906px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>
                    <ImageWrapper>
                        <StyledImage src ={`${photoPath}/green11.jpg`} width="1351px" height="1989px" quality={100}  layout = "intrinsic" />
                    </ImageWrapper>


            </GreenToYellow>
            <YellowToBlue>
                <RowBreak>
                    <ColumnBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blue1.jpg`} width="661px" height="510px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blue2.jpg`} width="661px" height="510px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                    </ColumnBreak>
                </RowBreak>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blue3.jpg`} width="665px" height="1046px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blue4.jpg`} width="665px" height="1046px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
                        <ImageWrapper>
                            <StyledImage src ={`${photoPath}/blue5.jpg`} width="665px" height="1046px" quality={100}  layout = "intrinsic" />
                        </ImageWrapper>
            </YellowToBlue>
            </Photos>
            
        </div>
    )
}

export default index
