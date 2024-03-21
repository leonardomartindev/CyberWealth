import { createGlobalStyle } from "styled-components";
import { theme } from './Theme'


const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
font-family: "arial", sans-serif;
overflow-x:hidden;
box-sizing: border-box;

}
body{
    background-color: ${theme.colors.primary_color};
    width: 100%;
    overflow-x: hidden;
}
html{
    width: 100%;
    overflow-x: hidden;
font-size: 62.5%;

    @media (max-width: 1200px){
        font-size: 55%;
    }
    @media (max-width: 1000px){
        font-size: 50%;
    }
    @media (max-width: 600px){
        font-size: 45%;
    }
    @media (max-width: 300px){
        font-size: 40%;
    }
}
a{
text-decoration:none;
color: inherit;
}
h1, h2{
font-family: 'Lato', sans-serif;
color:white;
}
p{
font-family: 'Open Sans', sans-serif;
color:white;

}
td{
    color:white;

}

`

export default GlobalStyle