import styled from 'styled-components'


export const CardContainer = styled.div`
    width: auto;
    height:auto;
    padding: 2rem;
    background: #2E3339;
    border-radius: 2px;
    display:flex;
    flex-direction:column;
    gap:2rem;
`

export const CardTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;

`
export const CardDescription = styled.p`
    font-size: 1.7rem;
    color:rgba(220, 220, 220, 1);
    font-family: Roboto, 'monospace';
    letter-spacing: 1px;

    @media(max-width: 700px){
        font-size: 1.5rem;
    }

`
export const IconSvg = styled.img`
    width: 4rem;
`

