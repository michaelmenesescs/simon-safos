import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'

//Styled Component
const Nav = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 50px;
    background-color: ${props => props.color};
    color: white;

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    width: 40%;
    justify-content: space-between;
    font-family: 'Futura-Regular';
    width: 50%;
    justify-content: space-evenly;
    font-size: 25px;
    font-weight: 500;


    
    @media screen and (max-width: 768px){
        flex-direction: column;
        font-size: 30px;
    }
`;



const PhotoNavbar = (props) => {

    return (
        <Nav color = {props.color}>
            <BlockL>
                <Link href={"/"}>
                    Simón Safos
                </Link>    
            </BlockL>
            <BlockR>
                <Link href={"/photography/street"}>
                    street
                </Link >
                <Link href={"/photography/nature"}>
                    nature
                </Link >
                
                <Link href={"/photography/people"}>
                    people
                </Link >
                <Link href={"/photography/process"}>
                    process
                </Link >
                
            </BlockR>
            
           

        </Nav>
    )
}

export default PhotoNavbar

