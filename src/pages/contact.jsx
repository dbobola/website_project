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

function Contact() {
    return (
        <StyledDiv>
            <StyledH1>Contact</StyledH1>
            <StyledP>Hello, here is how you can contact me.</StyledP>
        </StyledDiv>
    );
}

export default Contact;
