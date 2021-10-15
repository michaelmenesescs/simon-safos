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




const HomeNavbar = () => {
    return (
        <Nav>
            <BlockL>
                <Link href={"/"}>
                    Simón Safos
                </Link>    
            </BlockL>
            <BlockR>
                <Link href={"/art"}>
                    art
                </Link >
                <Link href={"/photography"}>
                    photography
                </Link >
                <Link href={"/music"}>
                    music
                </Link >
                <Link href={"/about"}>
                    about
                </Link >
            </BlockR>
        </Nav>
    )
}

export default HomeNavbar

