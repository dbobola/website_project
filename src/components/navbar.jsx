import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding: 30px;
    text-align: center;
    color: red;
    background-color: black;
    font-size: 40px;
    display: inline-block;
    text-decoration: none;
`;

function Navbar() {
    return (
        <div>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
        </div>
    );
}

export default Navbar;
