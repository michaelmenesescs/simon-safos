//A mobile responsive navigation bar

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const BackNav = styled(Navbar)`
    display: flex;
    width: 100%;
    color: white;
    flex-direction: row;
    padding: 40px;
    backdrop-filter: blur(6px);
    align-items: center;
    justify-content: center;
    justify-items: center;
    background: rgba(0, 0, 0, 0.26);

    @media screen and (max-width: 768px){
        padding-left: 0;
    }
`;

const BlockL = styled.div`
    display:flex;
    width: 50%;
    font-family: 'Gogoia';
    letter-spacing: 0.05em;
    font-weight: 250;
    font-size: 35px;
    color: white;
`;

const BlockR = styled.div`
    display:flex;
    font-family: 'Futura-Light';
    width: 50%;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
`;

const StyledLink = styled(Nav.Link)`
    display: flex;
    text-decoration: none;
    color: white;

    :hover {
        color: #8D8D8D;
        transition: all .4s ease;
        position: relative; 
        top: -5px;
        left: 20px;
    }
    
`
const StyledNav = styled(Nav)`
  display: flex;
  color: white;
  
`
const propTypes = {
  home: ["art", "photography", "music", "about"],
  art: ["oil", "charcoal", "subwayseries", "digital", "multimedia"],
  photography: ["nature", "people", "process", "street"]
}

const ResponsiveArtNavbar = (content) => {
  return (
    <BackNav collapseOnSelect expand="lg" sticky="top">
      <BlockL>
        <StyledLink href="/"> Simón Safos </StyledLink>
      </BlockL>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <BlockR>
        <Navbar.Collapse style ={{
            justifyContent:'space-between',
        }}>
          <StyledNav>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="oil"> oil </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="charcoal"> charcoal </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="subway"> subway series </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="digital"> digital </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="multimedia"> multimedia </StyledLink>
          </StyledNav>
        </Navbar.Collapse>
      </BlockR>
    </BackNav>
  )
}

export default ResponsiveArtNavbar;
