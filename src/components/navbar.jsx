import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
    width: 100%;
    float: left;
    margin: 0 0 1em 0;
    background-color: #303b34;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
    border-radius: none;
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
        color: #b1fc6a;
        background-color: #094009;
        transition-duration: 0.5s;
        transition-property: background-color;
        border-radius: 50px;
        animation-name: navbarHoverAnimation;
        animation-duration: 14s;

        @keyframes navbarHoverAnimation {
            0% {
                color: #b1fc6a;
            }
            25% {
                color: #5df0e4;
            }
            50% {
                color: #b1fc6a;
            }
            75% {
                color: #5df0e4;
            }
            100% {
                color: #b1fc6a;
            }
        }
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
