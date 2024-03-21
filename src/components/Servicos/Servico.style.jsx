import styled from 'styled-components'

export const ServiceSection = styled.section`
    margin-top: 20rem;
    width: 100vw;
    display:flex;
    flex-direction:column;
    gap: 7rem;

    
`
export const ServiceTitle = styled.h1`
    font-size: 5rem;
    padding: 0rem 7rem;

    @media(max-width: 700px){
        font-size: 4rem;
        padding: 0 2rem;
    }
    
`
export const ServiceCardsContainer = styled.div`
    padding: 0 7rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    gap: 3rem;

    @media(max-width: 700px){
        grid-template-columns: repeat(1, 1fr) ;
        padding: 0 2rem;
    }


`