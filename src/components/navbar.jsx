import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
    width: 100%;
    float: left;
    margin: 0 0 1em 0;
    background-color: #07142e;
    border-bottom: 3px solid #97b1bd;
    border-radius: 0 0 50px 50px;
    font-size: 30px;
    position: sticky;
    top: 0;
`;

const StyledUL = styled.ul`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    text-align: center;
`;

const StyledLI = styled.li`
    display: inline-block;

    @media screen and (max-width: 960px) {
        display: block;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 20px 50px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    line-height: 25px;
    color: white;

    @media screen and (max-width: 960px) {
        float: none;
        text-align: center;
        font-size: 20px;
    }

    &:hover {
        color: #cc891d;
        background-color: #152442;
        border-radius: 50px;
    }
`;

function Navbar() {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLI>
                    <StyledLink to="/home">HOME</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/about">ABOUT</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/gallery">GALLERY</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/contact">CONTACT</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/projects">PROJECTS</StyledLink>
                </StyledLI>
            </StyledUL>
        </StyledNav>
    );
}

export default Navbar;
