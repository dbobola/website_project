import React from "react";
import styled from "styled-components";
import Blue from "../../images/Blue Square.jpg";
import Green from "../../images/Green Square.jpg";
import Red from "../../images/Red Square.jpg";

const GalleryContainer = styled.div`
    margin: 0 70px 25px 70px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        margin: 0 20px 25px 20px;
    }
`;

const MainHeader = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 900px), (max-height: 640px) {
        font-size: 50px;
    }
`;

const GalleryDescription = styled.p`
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 1.5;
    text-align: center;

    @media screen and (max-width: 900px), (max-height: 640px) {
        font-size: 25px;
    }
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ImageColumn = styled.div`
    paddding: 10px;
    margin: 10px;
    flex: 30%;
    @media screen and (max-width: 900px), (max-height: 640px) {
        flex: 100%;
    }
`;

const StyledImg = styled.img`
    border-style: solid;
    border-color: black;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
`;

function Gallery() {
    return (
        <GalleryContainer>
            <MainHeader>Check it out!</MainHeader>
            <GalleryDescription>
                Here is an assortment of images relating to my work.
            </GalleryDescription>
            <ColumnContainer>
                <ImageColumn>
                    <StyledImg src={Blue} alt="Blue" />
                    <StyledImg src={Green} alt="Green" />
                    <StyledImg src={Red} alt="Red" />
                    <StyledImg src={Blue} alt="Blue" />
                    <StyledImg src={Green} alt="Green" />
                </ImageColumn>
                <ImageColumn>
                    <StyledImg src={Green} alt="Green" />
                    <StyledImg src={Red} alt="Red" />
                    <StyledImg src={Blue} alt="Blue" />
                    <StyledImg src={Green} alt="Green" />
                    <StyledImg src={Red} alt="Red" />
                </ImageColumn>
                <ImageColumn>
                    <StyledImg src={Red} alt="Red" />
                    <StyledImg src={Blue} alt="Blue" />
                    <StyledImg src={Green} alt="Green" />
                    <StyledImg src={Red} alt="Red" />
                    <StyledImg src={Blue} alt="Blue" />
                </ImageColumn>
            </ColumnContainer>
        </GalleryContainer>
    );
}

export default Gallery;
