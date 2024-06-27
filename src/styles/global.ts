import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    /** Fonts and Weigth */
    font-size:  62.5%;

    --primary-font: "Open Sans", sans-serif;
    --secondary-font: "Roboto", sans-serif;

    --font-24: 2.4rem;
    --font-20: 2rem;
    --font-16: 1.6rem;
    --font-14: 1.4rem;
    --font-12: 1.2rem;

    --font-regular-w400: 400;
    --font-medium-w500: 500;
    --font-semiBold-w600: 600;
    --font-bold-w700: 700;

}
:focus{
    outline: 0;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.colors.primaryBackground};
    color: ${(props) => props.theme.colors.primaryText};
}

body,input, textarea,button{
    font-family: var(--primary-font);
    font-size: var(--font-16);
    font-weight: var(--font-regular-w400);
}

`;