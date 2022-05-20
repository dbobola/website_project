import React, { useState } from "react";
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

const PageOverviewStyling = styled.p`
    font-size: 25px;
    margin-bottom: 100px;
`;

const ProjectDescriptionStyling = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
`;

const StyledImg = styled.img`
    border-style: solid;
    border-color: black;
    margin-bottom: 80px;
`;

const ButtonStyling = styled.button`
    border: 3px solid #048c24;
    border-radius: 100px;
    background-color: #90fca9;
    color: #048c24;
    padding: 20px 40px;
    transition-duration: 1s;
    transition-property: font-size;
    font-size: ${(props) => props.inputFont}px;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    display: block;
`;

let increase = true;

function Projects() {
    const [size, setSize] = useState(20);
    let change = 20;
    let buttonText = "BREATHE IN";

    if (size <= 20) {
        increase = true;
    }
    if (size >= 180) {
        increase = false;
    }

    if (increase) {
        change = 20;
        buttonText = "BREATHE IN";
    }
    if (!increase) {
        change = -20;
        buttonText = "BREATHE OUT";
    }

    return (
        <StyledDiv>
            <StyledH1>Projects</StyledH1>
            <PageOverviewStyling>
                Here you can find some projects that I am working on.
            </PageOverviewStyling>
            <StyledH1>Processing:</StyledH1>
            <ProjectDescriptionStyling>
                Growing and Shrinking Bubbles
            </ProjectDescriptionStyling>
            <StyledImg
                src={Circles}
                alt="500 colorful bubbles"
                width="750"
                height="450"
            />
            <ProjectDescriptionStyling>
                Scrolling Cityscape
            </ProjectDescriptionStyling>
            <StyledImg
                src={Cityscape}
                alt="Cityscape with sunset"
                width="750"
                height="450"
            />
            <StyledH1>Miscellaneous</StyledH1>
            <ButtonStyling
                inputFont={size}
                onClick={() => setSize(size + change)}
            >
                {buttonText}
            </ButtonStyling>
        </StyledDiv>
    );
}

export default Projects;
