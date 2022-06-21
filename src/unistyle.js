import { createGlobalStyle } from "styled-components";

const Unistyle = createGlobalStyle`
    * {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    body {
        background: #241f24;
        color: white;
        margin: 90px 0 0 110px;

        @media screen and (max-width: 900px), (max-height: 640px) {
            margin: 0 0 0 0;
        }

        ::-webkit-scrollbar {
            width: 25px;
            background: #382d3b;
        }
    
        ::-webkit-scrollbar-track {
            border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #03ff3d; 
            border-radius: 5px;
        }
    
        ::-webkit-scrollbar-thumb:hover {
            background: #53fc7a; 
        }
    }
`;

export default Unistyle;
