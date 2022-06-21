import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoHome } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoMan } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { Spin as Hamburger } from "hamburger-react";

const MenuContainer = styled.nav`
    height: 100%;
    width: 85px;
    float: left;
    background-color: #382d3b;
    box-shadow: 2px 0 7px 0 rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    overflow-x: hidden;
    margin: 0 0 0 -110px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        width: 100%;
        position: sticky;
        height: none;
        margin: 0 0 0 0;
        display: flex;
        justify-content: center;
        transition: display 1s, visibility 1s;
    }
`;

const MobileMenuContainer = styled.nav`
    display: none;

    @media screen and (max-width: 900px), (max-height: 640px) {
        display: ${(props) => props.mobileMenuDisplay};
        opacity: 1;
        max-width: 350px;
        width: 100%;
        height: auto;
        top: 80px;
        position: fixed;
        margin: auto;
        background-color: #382d3b;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.4);
        animation: enterMobileMenu 1s;

        @keyframes enterMobileMenu {
            0% {
                top: 0;
                opacity: 0;
            }
            100% {
                top: 80px;
                opacity: 1;
            }
        }
    }
`;

const MenuList = styled.ul`
    ${(props) =>
        props.desktop &&
        css`
            margin: 0 auto;
            padding: 0;
            text-align: center;

            @media screen and (max-width: 900px), (max-height: 640px) {
                width: 100%;
            }
        `}

    ${(props) =>
        props.mobile &&
        css`
            @media screen and (max-width: 900px), (max-height: 640px) {
                width: 100%;
                margin: 0 auto;
                padding: 0;
                text-align: center;
            }
        `}
`;

const MenuItem = styled.li`
    display: inline-block;
    padding: 5px 0;

    @media screen and (max-width: 900px), (max-height: 640px) {
        display: none;
    }
`;

const MobileMenuItem = styled.li`
    display: none;

    ${(props) =>
        props.menuButton &&
        css`
            @media screen and (max-width: 900px), (max-height: 640px) {
                display: inline-block;
                float: right;
                padding: 10px 20px;
            }
        `}

    ${(props) =>
        props.logo &&
        css`
            @media screen and (max-width: 900px), (max-height: 640px) {
                display: inline-block;
                float: left;
                padding: 10px 20px;
            }
        `}

    ${(props) =>
        props.container &&
        css`
            @media screen and (max-width: 900px), (max-height: 640px) {
                display: block;
                padding: 10px 30px;
            }
        `}
`;

const MenuNavLink = styled(NavLink)`
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 45px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        font-size: 30px;
        padding: 5px 5px;
    }

    &.active {
        color: black;
        background-color: #03ff3d;
        border-radius: 10px;
    }

    &:hover {
        color: #03ff3d;
        background-color: #1b181c;
        transition-duration: 0.4s;
        transition-property: background-color, color;
        border-radius: 10px;
        animation: navbarHoverAnimation 2.5s infinite;

        @keyframes navbarHoverAnimation {
            0% {
                color: #03ff3d;
            }
            30% {
                color: #03ff3d;
            }
            50% {
                color: #019423;
            }
            70% {
                color: #03ff3d;
            }
            100% {
                color: #03ff3d;
            }
        }
    }
`;

const ReactTooltipStyled = styled(ReactTooltip)`
    &.place-right {
        font-size: 25px;
        font-weight: 700;
        border-width: medium;
`;

function Sidebar() {
    let browserWidth = window.innerWidth;
    let browserHeight = window.innerHeight;
    let disableTooltip = false;

    if (browserWidth <= 900 || browserHeight <= 640) {
        disableTooltip = true;
    } else {
        disableTooltip = false;
    }

    const [menuButtonClick, setmenuButtonClick] = useState(false);
    let mobileMenuDisplayString = "none";

    if (menuButtonClick) {
        mobileMenuDisplayString = "block";
    }
    if (!menuButtonClick) {
        mobileMenuDisplayString = "none";
    }

    return (
        <MenuContainer>
            <MenuList desktop>
                <ReactTooltipStyled
                    place="right"
                    effect="solid"
                    backgroundColor="#1b181c"
                    textColor="#03ff3d"
                    border={true}
                    borderColor="#03ff3d"
                    disable={disableTooltip}
                />
                <MenuItem>
                    <MenuNavLink to="/home" data-tip="HOME">
                        <IoHome />
                    </MenuNavLink>
                </MenuItem>
                <MenuItem>
                    <MenuNavLink to="/about" data-tip="ABOUT">
                        <IoMan />
                    </MenuNavLink>
                </MenuItem>
                <MenuItem>
                    <MenuNavLink to="/gallery" data-tip="GALLERY">
                        <RiGalleryFill />
                    </MenuNavLink>
                </MenuItem>
                <MenuItem>
                    <MenuNavLink to="/contact" data-tip="CONTACT">
                        <IoChatbubblesSharp />
                    </MenuNavLink>
                </MenuItem>
                <MenuItem>
                    <MenuNavLink to="/projects" data-tip="PROJECTS">
                        <FaPaintBrush />
                    </MenuNavLink>
                </MenuItem>
                <MobileMenuItem logo>
                    <MenuNavLink to="/home">dollarbeale</MenuNavLink>
                </MobileMenuItem>
                <MobileMenuItem menuButton>
                    <Hamburger
                        rounded
                        duration={0.75}
                        toggled={menuButtonClick}
                        toggle={setmenuButtonClick}
                    />
                </MobileMenuItem>
            </MenuList>
            <MobileMenuContainer mobileMenuDisplay={mobileMenuDisplayString}>
                <MenuList mobile>
                    <MobileMenuItem container>
                        <MenuNavLink
                            to="/home"
                            onClick={() => setmenuButtonClick(!menuButtonClick)}
                        >
                            HOME
                        </MenuNavLink>
                    </MobileMenuItem>
                    <MobileMenuItem container>
                        <MenuNavLink
                            to="/about"
                            onClick={() => setmenuButtonClick(!menuButtonClick)}
                        >
                            ABOUT
                        </MenuNavLink>
                    </MobileMenuItem>
                    <MobileMenuItem container>
                        <MenuNavLink
                            to="/gallery"
                            onClick={() => setmenuButtonClick(!menuButtonClick)}
                        >
                            GALLERY
                        </MenuNavLink>
                    </MobileMenuItem>
                    <MobileMenuItem container>
                        <MenuNavLink
                            to="/contact"
                            onClick={() => setmenuButtonClick(!menuButtonClick)}
                        >
                            CONTACT
                        </MenuNavLink>
                    </MobileMenuItem>
                    <MobileMenuItem container>
                        <MenuNavLink
                            to="/projects"
                            onClick={() => setmenuButtonClick(!menuButtonClick)}
                        >
                            PROJECTS
                        </MenuNavLink>
                    </MobileMenuItem>
                </MenuList>
            </MobileMenuContainer>
        </MenuContainer>
    );
}

export default Sidebar;
