import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0 auto;
        font-family: 'JetBrains Mono', sans-serif;
        background-color: #232142;
    }

    h1, h2, h3, p, a {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;
