import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import navstyle from "./navstyle";

function Navbar() {
    return (
        <div id="nav">
            <ul>
                <li>
                    <a href="#/home">HOME</a>
                </li>
                <li>
                    <a href="#/gallery">GALLERY</a>
                </li>
                <li>
                    <a href="#/contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

/* Original
const StyledLink = styled(Link)`
    width: 100%;
    float: left;
    margin: 0 0 0;
    padding: 10px;
    list-style: none;

    text-align: center;
    color: black;
    background-color: #abc4cf;
    font-size: 40px;
    display: inline-block;
    text-decoration: none;
    border-bottom: 5px solid #ccc;
`;

function Navbar() {
    return (
        <div>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </div>
    );
}
*/

/* Attempt 1
const StyledLink = styled(Link)`
    #nav {
        width: 100%;
        float: left;
        margin: 0 0 1em 0;
        padding: 0;
        background-color: #f2f2f2;
        border-bottom: 1px solid #ccc;
    }
    #nav ul {
        list-style: none;
        width: 800px;
        margin: 0 auto;
        padding: 0;
    }
    #nav li {
        float: left;
    }
    #nav li a {
        display: block;
        padding: 8px 15px;
        text-decoration: none;
        font-weight: bold;
        color: #069;
        border-right: 1px solid #ccc;
    }
    #nav li:first-child a {
        border-left: 1px solid #ccc;
    }
    #nav li a:hover {
        color: #c00;
        background-color: #fff;
    }
`;

function Navbar() {
    return (
        <div id="StyledLink">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Gallery</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
}
*/

/* Attempt 2
function Navbar() {
    return (
        <script>
            <style>
               #nav {
                    width: 100%;
                    float: left;
                    margin: 0 0 1em 0;
                    padding: 0;
                    background-color: #f2f2f2;
                    border-bottom: 1px solid #ccc;
                }
                #nav ul {
                    list-style: none;
                    width: 800px;
                    margin: 0 auto;
                    padding: 0;
                }
                #nav li {
                    float: left;
                }
                #nav li a {
                    display: block;
                    padding: 8px 15px;
                    text-decoration: none;
                    font-weight: bold;
                    color: #069;
                    border-right: 1px solid #ccc;
                }
                #nav li:first-child a {
                    border-left: 1px solid #ccc;
                }
                #nav li a:hover {
                    color: #c00;
                    background-color: #fff;
                }
            </style>
            <div id="nav">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </script>
    );
}
*/

/* Attempt 3
const StyledLink = styled(Link)`
    #nav {
        width: 100%;
        float: left;
        margin: 0 0 1em 0;
        padding: 0;
        background-color: #f2f2f2;
        border-bottom: 1px solid #ccc;
    }
    #nav ul {
        list-style: none;
        width: 800px;
        margin: 0 auto;
        padding: 0;
    }
    #nav li {
        float: left;
    }
    #nav li a {
        display: block;
        padding: 8px 15px;
        text-decoration: none;
        font-weight: bold;
        color: #069;
        border-right: 1px solid #ccc;
    }
    #nav li:first-child a {
        border-left: 1px solid #ccc;
    }
    #nav li a:hover {
        color: #c00;
        background-color: #fff;
    }
`;

function Navbar() {
    return (
        <div>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </div>
    );
}
*/

export default Navbar;
