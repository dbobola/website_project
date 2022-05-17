import React from "react";
import styled from "styled-components";

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

function About() {
    return (
        <StyledDiv>
            <StyledH1>About</StyledH1>
            <StyledP>
                Hi, I am David. On this site, you can find some of my projects
                and digital art.
            </StyledP>
        </StyledDiv>
    );
}

export default About;
