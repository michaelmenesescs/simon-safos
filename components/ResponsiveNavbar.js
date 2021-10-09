//A mobile responsive navigation bar

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';


const propTypes = {
  home: ["art", "photography", "music", "about"],
  art: ["oil", "charcoal", "subwayseries", "digital", "multimedia"],
  photography: ["nature", "people", "process", "street"]
}

const StyledNavbar = styled(Navbar)` 
    display: flex;
    width: 100%;
    flex-direction: row;
    backdrop-filter: blur(6px);
    padding-left: 40px;
    align-items: center;
`
const BlockL = styled.div`
    display:flex;
    width: 50%;
    justify-content: flex-start;
    font-family: 'Gogoia';
    letter-spacing: 0.05em;
    font-weight: 250;
    font-size: 30px;
    text-decoration: none;
`;

const BlockR = styled.div`
    display:flex;
    font-family: 'Futura-Light';
    width: 50%;
    font-weight: 250;
    font-size: 30px;
    padding: 20px;
    color:white;
    justify-content: space-evenly;
`;

const StyledLink = styled(Nav.Link)`
  text-decoration: none;
  color: white;
`;


const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-evenly;
`;

const ResponsiveNavbar  = (content) => {
  return (
      <StyledNavbar collapseOnSelect expand="lg">
        <BlockL>
          <StyledLink href="/"> Simón Safos </StyledLink>
        </BlockL>
        <BlockR>
          <StyledNavbar.Collapse id="responsive-navbar-nav">
            <StyledNav className="me-auto">
              {
                  propTypes.home.map(item => {
                    return (
                      <StyledLink href={`/${item}`}> {item} </StyledLink>
                      )
                    })
              }
            </StyledNav>
          </StyledNavbar.Collapse>
          <StyledNavbar.Toggle aria-controls="responsive-navbar-nav" />
        </BlockR>
      </StyledNavbar>
  )
}

export default ResponsiveNavbar;
