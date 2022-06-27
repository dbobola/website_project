import React, { useState } from "react";
import styled from "styled-components";
import Flowers from "../../images/Bright Flowers.jpg";
import Sparkles from "../../images/Blue Sparkles.gif";
import Handsome from "../../images/Handsome Avatar Squidward.png";

const StyledDiv = styled.div`
    margin: 0 70px 25px 70px;

    @media screen and (max-width: 900px), (max-height: 640px) {
        margin: 0 20px 25px 20px;
    }
`;

const StyledH1 = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`;

const StyledP = styled.p`
    font-size: 25px;
    margin-bottom: 30px;
`;

const StyledImg = styled.img`
    border-style: solid;
    border-color: black;
    margin-bottom: 30px;
`;

const StyledButt = styled.button`
    border-style: solid;
    background-color: purple;
    color: white;
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

function Gallery() {
    const [flowerZoom, setFlowerZoom] = useState(false);
    let flowerWidth = "800";
    let flowerHeight = "500";
    let flowerInOption = "In";
    if (flowerZoom) {
        flowerWidth = "1600";
        flowerHeight = "1000";
        flowerInOption = "Out";
    }

    const [sparkleZoom, setSparkleZoom] = useState(false);
    let sparkleWidth = "400";
    let sparkleHeight = "400";
    let sparkleInOption = "In";
    if (sparkleZoom) {
        sparkleWidth = "800";
        sparkleHeight = "800";
        sparkleInOption = "Out";
    }

    const [squidZoom, setSquidZoom] = useState(false);
    let squidWidth = "350";
    let squidHeight = "250";
    let squidInOption = "In";
    if (squidZoom) {
        squidWidth = "700";
        squidHeight = "500";
        squidInOption = "Out";
    }

    return (
        <StyledDiv>
            <StyledH1>Gallery</StyledH1>
            <StyledP>
                Please enjoy this gallery containing lots of beautiful images.
            </StyledP>
            <br />
            <StyledButt onClick={() => setFlowerZoom(!flowerZoom)}>
                Click to Zoom {flowerInOption}
            </StyledButt>
            <br />
            <StyledImg
                src={Flowers}
                alt="Bright Flowers"
                width={flowerWidth}
                height={flowerHeight}
            />
            <br />
            <StyledButt onClick={() => setSparkleZoom(!sparkleZoom)}>
                Click to Zoom {sparkleInOption}
            </StyledButt>
            <br />
            <StyledImg
                src={Sparkles}
                alt="Moving blue sparkles"
                width={sparkleWidth}
                height={sparkleHeight}
            />
            <br />
            <StyledButt onClick={() => setSquidZoom(!squidZoom)}>
                Click to Zoom {squidInOption}
            </StyledButt>
            <br />
            <StyledImg
                src={Handsome}
                alt="Handsome avatar Squidward"
                width={squidWidth}
                height={squidHeight}
            />
        </StyledDiv>
    );
}

export default Gallery;
