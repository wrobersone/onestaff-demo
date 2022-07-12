const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    :root {
        --color-primary: #4fc1b1;
    }

    html {
        font-size: 15px;
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.fontColor};
    }
`;
