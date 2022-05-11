import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
    width: 100%;
    float: left;
    margin: 0 0 1em 0;
    padding: 0;
    background-color: #07142e;
    border-bottom: 1px solid #97b1bd;
    color: white;
    font-size: 25px;
    // position: fixed;
`;

const StyledUL = styled.ul`
    list-style: none;
    width: 800px;
    margin: 0 auto;
    padding: 0;
`;

const StyledLI = styled.li`
    float: left;
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 20px 40px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    background-color: #07142e;
    color: white;
    // border-right: 1px solid #ccc;

    &:hover {
        color: #cc891d;
        // background-color: #fff;
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
                    <StyledLink to="/gallery">GALLERY</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/contact">CONTACT</StyledLink>
                </StyledLI>
            </StyledUL>
        </StyledNav>
    );
}

export default Navbar;
