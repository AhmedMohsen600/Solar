import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
h1,h2,h3,h4 {
    width: fit-content;
}
 :root {
     --color-black: #3b3b3b;
     --primary-color: #027385;
     --color-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
     --color-smoke: #ffffff;
     --color-hover: #f7f7f7;
     --color-gray: #757575;
     --color-desc: #8c8c8c;
     --secondry-color: #013365;
     --title-size: 5rem;
     --title4-size: 4rem; 
     --desc-size: 1.8rem;
     --link-size: 1.6rem;
     --small-size: 1.4rem;
     --super-small: 1.2rem;
     --container-width: 92%;
     @media(max-width: 900px){
     --title-size: 3rem;
     --title4-size: 3rem; 
     }
 }

body {
    font-family: 'Source Sans Pro', sans-serif;
}
    /* font-family: 'Raleway', sans-serif;
    font-family: 'Urbanist', sans-serif; */

`;
