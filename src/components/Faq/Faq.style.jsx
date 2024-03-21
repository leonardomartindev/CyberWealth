import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { theme } from "../../Theme";

export const FaqContainer = styled.section`
    width: 100vw;
    height: 85vh;
    display:flex;
    flex-direction:column;
    padding: 0 7rem;
    gap: 9rem;
    
    @media(max-width: 800px){
        height: auto;
        padding-bottom: 12rem;
        margin-top: 10rem;
    }
    @media(max-width: 700px){
        padding: 2rem;
        height: auto;
        margin-top: 10rem;
    }
`
export const FaqTitle = styled.h1`
    font-size: 5rem;
`
export const QuestionsContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 2rem;
`
export const QuestionCard = styled.div`
    height: auto;
    background: #2E3339;
    padding: 2rem;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    gap: 2.5rem;
    cursor:pointer;
    transition: all 200ms;
    border: 1px solid transparent;

    &:hover{ 
        border: 1px solid ${theme.colors.green};
    }
    @media(max-width: 700px){
       &:hover{
        border: 1px solid transparent; 
        } 
    }

`
export const QuestionTitle = styled.h2`
    font-size:2rem;
    font-family: Roboto, 'monospace';
    font-weight: normal;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width: 700px){
        font-size: 2.2rem;
    }
`
export const QuestionArrow = styled(FaRegArrowAltCircleRight)`
    transform: ${props => props.active ? 'rotate(90deg)' : ''};
    color: ${theme.colors.green};
`
export const QuestionAnswer = styled.p`
    color: #C8C8C8;
    display: ${props => props.active ? '' : 'none'};
    font-size: 1.6rem;
    height: auto;
    @media(max-width: 700px){
        font-size: 2rem;
    }
    
`