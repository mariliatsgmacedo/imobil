import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{

     /** Dark Mode */
     --primary-dark-blue-400: #1E1E2D;
    --secondary-dark-blue-100: #25273E;
    --primary-text-gray-100: #E4E8F1;
    --secondary-text-gray-200: #A0A3B1;

    /** Light Mode */
    --primary-light-gray-200: #f7f9fc;
    --secondary-light-gray-100: #ffffff;
    --primary-text-blue-400: #2e3a59;
    --secondary-text-blue-200: #5a6a8b;

    /** Feedback Colors and actions */
    --primary-border-lines-blue-300: #3A3B5A;
    --primary-buttons-actions-blue-200: #007bff;
    --secondary-buttons-actions-gray-300: #6c757d;
    --success-green-200: #28a745;
    --warning-yellow-200: #ffc107;
    --error-red-200: #dc3545;

    /** Fonts and Weigth */
    font-size:  62.5%;

    --primary-font: "Open Sans", sans-serif;
    --secondary-font: "Roboto", sans-serif;

    --font-24: 2.4rem;
    --font-20: 2rem;
    --font-16: 1.6rem;
    --font-12: 1.2rem;

    --font-regular-w400: 400;
    --font-medium-w500: 500;
    --font-semiBold-w600: 600;
    --font-bold-w700: 700;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: var(--primary-dark-blue-400);
    color: var(--primary-text-blue-400);
}

body,input, textarea,button{
    font-family: var(--primary-font);
    font-size: var(--font-16);
    font-weight: var(--font-regular-w400);
}

`;