import styled, { keyframes } from 'styled-components'
import { theme } from '../../Theme'
import { IoIosArrowForward, IoIosMenu  } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdOutlineDesignServices, MdOutlineCurrencyExchange } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { MdEventRepeat } from "react-icons/md";
import { GiTrade } from "react-icons/gi";

export const ServiceIcon = styled(MdOutlineDesignServices)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}
`
export const CoinsIcon = styled(MdOutlineCurrencyExchange)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`
export const FaqIcon = styled(FaQuestionCircle)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`
export const NewsIcon = styled(FaNewspaper)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}

`
export const EducationIcon = styled(MdCastForEducation)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`
export const AnalisisIcon = styled(FaChartLine)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`
export const EventsIcon = styled(MdEventRepeat)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`
export const TradeIcon = styled(GiTrade)`
font-size: 2rem;
margin-right: 1rem;
display:${props => props.burguerMenuActive ? "none" : "block"}`


export const ArrowIcon = styled(IoIosArrowForward)`` 
export const CloseIcon = styled(IoCloseCircleSharp)`
  font-size: 5rem;
  position:absolute;
  top: 2rem;
  left: 2rem;
  display:none;
  cursor:pointer;
  @media(max-width: 1000px) {
    display:block;
  }
  ` 
export const MenuIcon = styled(IoIosMenu)`
  font-size: 8rem;
  color:white;
  display: none;
  @media(max-width: 1000px){
    display:block;
    position:absolute;
    top: 1rem;
    right: 2rem;
    cursor:pointer;
  }
` 

export const NavContainer = styled.nav`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 3rem;
    font-size: 1.4rem;
    z-index: 100;
    `
export const LeftContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 8rem;
    transition: all .3s ease;
    @media(max-width: 1000px){
      justify-content:start;
      align-items:start;
      position:absolute;
      padding: 3rem;
      top: 0;
      right: ${props => props.burguerMenuActive ? '0' : '-100%'};
      background: ${theme.colors.primary_color};
      z-index: 2;
      border-left: 3px solid ${theme.colors.green};
      height: 100vh;
    }
    @media(max-width: 700px){
      width: 100vw;
    }
`



export const RightContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    @media(max-width: 1000px){
      position:absolute;
      top: 2.5rem;
      right: 15rem;      
    }
    @media(max-width: 700px){
      display:none;
    }
    
`

export const Ul = styled.ul`
    display:flex;
    gap: 7rem;
    align-items:center;
    text-align:center;
    letter-spacing: .2rem;
    
    @media(max-width: 1000px){
      flex-direction:column;
      align-items:start;
      gap: 2rem;
      margin-top: 6rem;
      width: 40vw;
    }
    @media(max-width: 700px){
      list-style-type: disc;
      width: 100%;
      gap: 3rem;
      
    }
`
export const Li = styled.li`
    color:white;
    display: flex;
    align-items:center;
    gap: .5rem;
    transition: all 300ms;
    text-transform: uppercase;
    &:hover{ 
        color: ${theme.colors.green};
    }
    
    `

export const BonusLi = styled(Li)`
    display:${props => props.burguerMenuActive ? "flex" : "none"};
`

export const Logo = styled.img`
    width: 8rem;
    @media(max-width: 1000px){
      position:absolute;
      top: 1rem;
    }
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



export const BtnOpenAccount = styled.button`
    color: #141618;
    background: ${theme.colors.green};
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2rem;
    width: auto;
    text-transform: uppercase;   
  cursor: pointer;
  letter-spacing: .1rem;
  font-size: 1.4rem;
  font-weight: 600;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: all 0.1s linear;
  border: 1px solid transparent;


  &:hover {

    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, ${theme.colors.red});
        animation: ${animate1} 1s linear infinite;
      }

      &:nth-child(2) {
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${theme.colors.red});
        animation: ${animate2} 1s linear infinite;
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 100%;
        background: linear-gradient(270deg, transparent, ${theme.colors.red});
        animation: ${animate3} 1s linear infinite;
        animation-delay: 0.5s;
      }

      &:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, ${theme.colors.red});
        animation: ${animate4} 1s linear infinite;
        animation-delay: 0.75s;
      }
    }
  }
`


export const BtnLogin = styled.button`
  cursor: pointer;
  letter-spacing: .1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.colors.green};
  background: #141618;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 18rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.1s linear;
  border: 1px solid transparent;


  &:hover {

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
export const BurguerContainerBtn = styled.div`
  display:flex;
  width: auto;
  gap: 2rem;

`
export const BurguerButton1 = styled(BtnLogin)`
  display: none;
  @media(max-width: 700px){
    display:block;
  }
  `
export const BurguerButton2 = styled(BtnOpenAccount)`
  display: none;
    @media(max-width: 700px){
      display:block;
      width: 20rem;
    }
`


    const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

    export const TradePopup = styled.div`
    position: absolute;
    left: 20%; 
    height: auto;
    width: 75rem;
    top: 6rem;
    transform: translateX(-50%);
    background-color: ${theme.colors.secondary_color};
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    animation: ${fadeIn} 0.3s ease forwards; /* Aplicar a animação de aparecer */
    padding: 2rem;

    div{ 
        display:flex;
        text-align:left;
        gap: 2rem;
        font-size: .95rem;
        font-family:arial;
    }
    ul{
        display:flex;

        flex-direction:column;
        gap: 2.5rem;
    }

    `;

    export const TradeLi = styled.li`
        transition: all 300ms;
        padding: 1rem;
        &:hover{
            cursor:pointer;
            background-color: ${theme.colors.primary_color};
        }
    `

  export const TradePopupH2 = styled.h2`
    letter-spacing: .05rem;
    margin-bottom: .2rem;
  `
  export const TradePopupP = styled.p`
    text-transform: lowercase;
    font-size: 1.7rem;
    letter-spacing: 0;
    font-weight: normal;
    color: #ccc;
  `