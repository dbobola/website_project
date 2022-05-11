import { createGlobalStyle } from "styled-components";

const Navstyle = createGlobalStyle`
    #nav {
        width: 100%;
        float: left;
        margin: 0 0 1em 0;
        padding: 0;
        background-color: #07142e;
        border-bottom: 1px solid #97b1bd;
        color: white;
        font-size: 25px;
        // position: sticky;
    }
    #nav ul {
        list-style: none;
        width: 800px;
        margin: 0 auto;
        padding: 0;
    }
    #nav li {
        float: left;
    }
    #nav li a {
        display: block;
        padding: 20px 40px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        background-color: #07142e;
        color: white;
        // border-right: 1px solid #ccc;
    }
    #nav li:first-child a {
        // border-left: 1px solid #ccc;
    }
    #nav li a:hover {
        color: #cc891d;
        // background-color: #fff;
    }
`;

export default Navstyle;
