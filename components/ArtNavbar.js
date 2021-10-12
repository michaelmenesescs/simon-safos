import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    color: white;
    background: rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(6px);
    align-items: center;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    
    }
`;

const BlockL = styled.div`
    display:flex;
    width: 40%;
    justify-content: flex-start;
    font-family: 'Gogoia';
    letter-spacing: 0.05em;
    font-weight: 250;
    font-size: 35px;

    @media screen and (max-width: 768px){
        align-self: center;

    }

`;


const BlockR = styled.div`
    display:flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    font-family: 'Futura-Regular';
    font-size: 30px;
    font-weight: 500;

    @media screen and (max-width: 1030px){
        flex-direction: column;
        font-size: 30px;
        width: 40%;
    }

    .Link {
        &::hover {
            color: aliceblue;
        }
    }

`;





const ArtNavbar = () => {
    return (
        <Nav>
            <BlockL>
                <Link href={"/"}>
                    Simón Safos
                </Link>    
            </BlockL>
            <BlockR>
                <Link href={"/art/oil"}>
                    oil
                </Link >    
                <Link href={"/art/charcoal"}>
                    charcoal
                </Link >
                <Link href={"/art/subway"}>
                    subway series
                </Link >
                <Link href={"/art/digital"}>
                    digital
                </Link >
                <Link href={"/art/multimedia"}>
                    multimedia
                </Link >
                
            </BlockR>
        </Nav>
    )
}

export default ArtNavbar