import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 33%; 
    width: 302px;
    height: 380px;
    box-shadow: ${p => p.shadow ? 'white':'inset 3px 7px 4px 4px rgba(0, 0, 0, 0.25)'};
    border-radius:10px;
    padding: 15px;
    background-color: ${p => p.bgcolor ? 'white': 'linear-gradient(180deg, rgba(0, 0, 0, 0.2408) 0%, rgba(0, 0, 0, 0.2604) 100%)'};
    backdrop-filter: blur(8px); 
    font-family: 'Futura-Light';
    font-size: 16pt;
`

const PaintingImage = styled(Image)`
    display:flex;
    justify-content: center;
`;

const Description = styled.div`
    color: ${p => p.text ? 'black' : 'white'};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Subtext = styled.div`
    display:flex;
    flex-direction: column;
`;

const Painting = ({title, type, year, dimensions, image, width, height, backgroundcolor, text}) => {
    return (
       <Container bgcolor={backgroundcolor}>
           <PaintingImage src={image} width={width} height={height} loading = "eager" quality ={100} objectFit="cover"/>
           <Subtext>
            <Description text ={text} >
                {title}
            </Description>
                <Description text={text}>
                    {type}, {year}, {dimensions}
                </Description>
           </Subtext>
       </Container>
    
        
)
}

export default Painting
