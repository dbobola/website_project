import React from "react";
import styled from "styled-components";
import { IoChatbubblesSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Raccoon from "../../images/pixelRaccoon.gif";

const HomeContainer = styled.div`
    margin: 0 70px 25px 70px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        margin: 0 20px 25px 20px;
    }
`;

const MainHeader = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        font-size: 50px;
    }
`;

const SiteDescription = styled.p`
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 1.5;
    text-align: justify;

    @media screen and (max-width: 900px), (max-height: 640px) {
        font-size: 25px;
        text-align: start;
    }
`;

const HomePageLink = styled(Link)`
    font-weight: bold;
    color: #a3ffb8;
    text-decoration: none;

    &:hover {
        color: #5bfc80;
        text-decoration: underline;
    }
`;

const RaccoonGif = styled.img`
    margin-bottom: 30px;
    max-width: 100%;
    width: 320px;
    height: 240px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

function Homie() {
    return (
        <HomeContainer>
            <MainHeader>Hi I'm David!</MainHeader>
            <SiteDescription>
                I am an aspiring web developer and digital artist. Here you
                may&nbsp;
                <HomePageLink to="/projects">
                    check out my projects
                </HomePageLink>
                , <HomePageLink to="/gallery">view my gallery</HomePageLink>, or{" "}
                <HomePageLink to="/about">learn more about me</HomePageLink>.
            </SiteDescription>
            <SiteDescription>
                If you wish to get in touch, you may do so at my{" "}
                <HomePageLink to="/contact">
                    Contact Page <IoChatbubblesSharp />
                </HomePageLink>
            </SiteDescription>
            <RaccoonGif src={Raccoon} alt="Pixel Raccoon Gif" />
        </HomeContainer>
    );
}

export default Homie;
