import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 50px;
`;

const BlockL = styled.div`
    display:flex;
    width: 50%;
    justify-content: flex-start;
    font-family: monospace;
    color: ${p => p.color ? 'color' : 'black'};
    font-family: 'Gogoia';
    letter-spacing: 0.05em;
    font-weight: 250;
    font-size: 35px;
    
`;


const BlockR = styled.div`
    display:flex;
    width: 40%;
    justify-content: space-between;
`;

const NameNavbar = ({color}) => {
    return (
        <Nav>
            <BlockL color={color}>
                <Link href={"/"}>
                    Simón Safos
                </Link>    
            </BlockL>
        </Nav>
    )
}

export default NameNavbar

