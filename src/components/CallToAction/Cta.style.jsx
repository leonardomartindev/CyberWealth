import styled from "styled-components";
import { theme } from "../../Theme";

export const CtaContainer = styled.section`
    display:flex;
    flex-direction:column;
    gap: 2rem;
    padding: 0 7rem;
    height: 60vh;

    @media(max-width: 700px){
        margin-top: 10rem;
        padding: 2rem;
    }
    
`
export const CtaTitle = styled.h1`
    font-size: 5rem;
    width: 80%;
    font-family: "Open Sans", sans-serif;
    font-weight:normal;

    @media(max-width: 800px){
        width: 100%;
    }
`
export const CtaBtn = styled.button`
    background: ${theme.colors.green};
    color: ${theme.colors.primary_color};
    padding: 2rem;
    font-size: 2rem;
    text-transform:uppercase;
    border: none;
    outline: none;
    font-weight: bold;
    width: 30rem;
    cursor:pointer;
`
