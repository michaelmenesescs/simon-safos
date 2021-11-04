//A mobile responsive navigation bar

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const colors = {
  green: "#3F452D",
  greenblue: "#344541",
  darkerblue: "#2A373B",
  darkblue: "#273339",
  bronze: "#393326",
  gray: "#515250",
  orange: "#70563E",
  darkorange: "#432611",
};

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
    background: rgba(66, 66, 66, 0.02);
    backdrop-filter: blur(7px);
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

const ResponsivePhotoNavbar = (props) => {
  return (
    <BackNav collapseOnSelect expand="lg">
      <BlockL>
        <StyledLink href="/"> Simón Safos </StyledLink>
      </BlockL>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <BlockR>
        <Navbar.Collapse style ={{
            justifyContent:'space-between',
        }}>
          <StyledNav>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="street">  street </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="nature">  nature </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="people">  people </StyledLink>
            <StyledLink style = {{color: 'white', paddingLeft: "50px", paddingRight: "50px"}} href="process"> process </StyledLink>
          </StyledNav>
        </Navbar.Collapse>
      </BlockR>
    </BackNav>
  )
}

export default ResponsivePhotoNavbar;
