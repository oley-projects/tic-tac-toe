import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: rgb(84, 95, 125);
        font-family: sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;