import styled from "styled-components";
import { theme } from "../../Theme";

export const CriptoContainer = styled.section`
    margin-top: 12rem;
    width: 100vw;
    height: auto;
    padding: 0 7rem;
    display:flex;
    flex-direction:column;
    gap: 4rem;

    @media(max-width: 850px){
        height: 100vh;
    }
    @media(max-width: 700px){
        height: 100vh;
        padding: 2rem 2rem;
    }
`
export const CriptoTitle = styled.h1`
    font-size: 5rem;

`
export const DownContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    @media(max-width: 850px){
        grid-template-columns: repeat(1, 1fr);
        gap: 6rem;
    }
`

export const GraphicContainer = styled.div`
    display:flex;
    align-items:center;
    
`
export const GraphicTable = styled.table`
    width: 100%;
    font-size: 2rem;
    font-weight:bold;
    border-radius: 10px;
    background: #2E3339;
    


    `
export const TableTr = styled.tr`
`
export const TableTd = styled.td`
padding: 2rem;
border-bottom: 2px solid ${theme.colors.primary_color};

p{
        display:flex;
        align-items:center;
        gap: 1.2rem;
        font-weight:bold;
    }
    img{
        width: 4rem;
    }

    
`

export const TableBody = styled.tbody`
`;

export const CompreRapidoContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 3.5rem;
`
export const CompreRapidoTitle = styled.h1`
    font-size: 3.5rem;
    text-transform: capitalize;
`
export const CompreRapidoSubTitle = styled.h2`
    font-size: 2.1rem;
    color: ${theme.colors.green};

    @media(max-width: 700px){
        font-size: 2.5rem;
    }
`
export const CompreRapidoDescription = styled.p`
    font-size: 1.9rem;

    @media(max-width: 700px){
        font-size: 2rem;
    }
`
export const CompreAgora = styled.button`
    width: 20rem;
    color: ${theme.colors.primary_color};
    background: ${theme.colors.green};
    border: none;
    outline: none;
    font-size: 2rem;
    padding: 1.2rem 2rem;
    font-weight:bold;
    cursor:pointer;
    text-transform: capitalize;
`
