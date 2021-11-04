import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    width: 100%;
    color: white;
    flex-direction: row;
    padding: 40px;
    backdrop-filter: blur(6px);
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`;

const BlockL = styled.div`
    display:flex;
    width: 50%;
    justify-content: flex-start;
    font-family: 'Gogoia';
    letter-spacing: 0.05em;
    font-weight: 250;
    font-size: 35px;
`;


const BlockR = styled.div`
    display:flex;
    font-family: 'Futura-Light';
    width: 50%;
    justify-content: space-evenly;
    font-size: 30px;
    font-weight: 500;
    @media screen and (max-width: 768px){
        flex-direction: column;

    }
`;

const StyledLink = styled.a`
    display: flex;
    text-decoration: none;
    color: white;
    &:hover {
        color: #8D8D8D;
        transition: all .4s ease;
        position: relative; 
        top: -5px;
        left: 20px;
    }
`


const HomeNavbar = () => {
    return (
        <Nav>
            <BlockL>
                <StyledLink href={"/"}>
                    Simón Safos
                </StyledLink>    
            </BlockL>
            <BlockR>
                <StyledLink href={"/art"}>
                    art
                </StyledLink >
                <StyledLink href={"/photography"}>
                    photography
                </StyledLink>
                <StyledLink href={"/music"}>
                    music
                </StyledLink >
                <StyledLink href={"/about"}>
                    about
                </StyledLink >
            </BlockR>
        </Nav>
    )
}

export default HomeNavbar

