import styled, { keyframes } from 'styled-components'
import { theme } from '../../Theme'

export const HeaderSection = styled.header`
    margin-top: 9rem;
    display:flex;
    width: 100vw;
    justify-content:space-around;
    align-items:center;
    @media(max-width: 1000px){
      padding: 5rem;
    }
    @media(max-width: 600px){
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap: 6rem
    }
   
  `
export const TitleContainer = styled.div`
    width: 80rem;
    display:flex;
    flex-direction:column;
    gap: 1.5rem;
    @media(max-width: 900px){
      width: auto;
      
    }
`
export const Title = styled.h1`
    font-size: 4.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    @media(max-width: 1000px){
      font-size: 4rem;
    }
    @media(max-width: 900px){
      font-size: 3.5rem;
    }
}
`
export const Form = styled.form`
    display:flex;
    gap: 1rem;
`
export const Input = styled.input`
    background:none;
    border: 2px solid ${theme.colors.secondary_color};
    outline: none;
    font-size: 2rem;
    border-radius: 10px;
    color: ${theme.colors.secondary_color};
    padding: 1.5rem 5rem 2rem 1.5rem;
    display:flex;

`

const animate1 = keyframes`
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
`;

const animate2 = keyframes`
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
`;

const animate3 = keyframes`
  0% {
    right: -100%;
    height: 3px;
  }
  50%,
  100% {
    height: 2px;
    right: 100%;
  }
`;

const animate4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
`;

export const Button = styled.button`
  box-sizing: content-box;
  background: ${theme.colors.green};
  border: none;
  outline: none;
  font-size: 2rem;
  border-radius: 10px;
  color: ${theme.colors.primary_color};
  padding: 1.5rem 3rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.1s linear;
  border: 1px solid transparent;

  @media(max-width: 500px){
    font-size: 1.5rem;
  }

  &:hover {
    border: 1px solid transparent;
    box-sizing: content-box;
    

    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3a86ff);
        animation: ${animate1} 1s linear infinite;
      }

      &:nth-child(2) {
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #3a86ff);
        animation: ${animate2} 1s linear infinite;
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 100%;
        background: linear-gradient(270deg, transparent, #3a86ff);
        animation: ${animate3} 1s linear infinite;
        animation-delay: 0.5s;
      }

      &:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #3a86ff);
        animation: ${animate4} 1s linear infinite;
        animation-delay: 0.75s;
      }
    }
  }
`;
export const ImageContainer = styled.div`
`
export const Image = styled.img`
    width: 40rem;
    height: auto;
    position: relative;
    z-index: 1;

    @media(max-width: 1000px){
      width: 35rem;
    }
    @media(max-width: 900px){
      display:none;
    }
    @media(max-width: 600px){
      display:block;
    }
    `

export const Squares = styled.img`
    width: 45rem;
    height: auto;
    position: absolute;
    right: 0;
    bottom: -12rem;

    @media(max-width: 1000px){
      bottom: 5rem;
    }
    @media(max-width: 600px){
      bottom: -40rem;
    }
`


