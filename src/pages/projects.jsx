import React from "react";
import styled from "styled-components";
import Circles from "../../images/circles_0001.png";
import Cityscape from "../../images/cityscape_0001.png";

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
`;

const StyledImg = styled.img`
    border-style: solid;
    border-color: black;
    margin-bottom: 30px;
`;

function Projects() {
    return (
        <StyledDiv>
            <StyledH1>Projects</StyledH1>
            <StyledP>
                Here you can find some projects that I am working on.
                <br />
                <br />
                <br />
            </StyledP>
            <StyledH1>Processing:</StyledH1>
            <StyledP>
                Growing and Shrinking Bubbles
                <br />
            </StyledP>
            <StyledImg
                src={Circles}
                alt="500 colorful bubbles"
                width="750"
                height="450"
            />
            <br />
            <StyledP>
                Scrolling Cityscape
                <br />
            </StyledP>
            <StyledImg
                src={Cityscape}
                alt="Cityscape with sunset"
                width="750"
                height="450"
            />
        </StyledDiv>
    );
}

export default Projects;
