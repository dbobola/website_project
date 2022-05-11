import React from "react";
import styled from "styled-components";
import Flowers from "../../images/Bright Flowers.jpg";
import Sparkles from "../../images/Blue Sparkles.gif";

const StyledDiv = styled.div`
    margin-top: 0;
    margin-right: 70px;
    margin-bottom: 25px;
    margin-left: 70px;
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

function Gallery() {
    return (
        <StyledDiv>
            <StyledH1>Gallery</StyledH1>
            <StyledP>
                Please enjoy this gallery containing lots of beautiful images.
            </StyledP>
            <StyledImg
                src={Flowers}
                alt="Bright Flowers"
                width="800"
                height="500"
            />
            <br />
            <StyledImg
                src={Sparkles}
                alt="Moving blue sparkles"
                width="500"
                height="500"
            />
        </StyledDiv>
    );
}

export default Gallery;
