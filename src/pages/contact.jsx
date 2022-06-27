import React from "react";
import styled from "styled-components";

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
`;

function Contact() {
    return (
        <StyledDiv>
            <StyledH1>Contact</StyledH1>
            <StyledP>Hello, here is how you can contact me.</StyledP>
        </StyledDiv>
    );
}

export default Contact;
