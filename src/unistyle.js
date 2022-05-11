import { createGlobalStyle } from "styled-components";

const Unistyle = createGlobalStyle`
    * {
        margin: 0;
        background-color: #e6f6fc;
        font-family: Arial, Helvetica, sans-serif;
    }
    h1 {
        font-size: 50px;
        margin-top: 0;
        margin-right: 70px;
        margin-bottom: 25px;
        margin-left: 70px;
    }
    p {
        font-size: 25px;
        margin-top: 0;
        margin-right: 70px;
        margin-bottom: 100px;
        margin-left: 70px;
    }
`;

export default Unistyle;
