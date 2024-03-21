import {  CardContainer,   CardTitle, CardDescription, IconSvg } from "./Card.style"
import propTypes from 'prop-types';
import BitCoin from "../../../assets/iconsService/BitCoin.svg";
import Wallet from "../../../assets/iconsService/Wallet.svg";
import Finance from "../../../assets/iconsService/Finance.svg";
import Transfer from "../../../assets/iconsService/Transfer.svg";

const iconComponents = {
    BitCoin: BitCoin,
    Wallet: Wallet, 
    Finance: Finance, 
    Transfer: Transfer,

}

export default function Card({title, icon, description }) {
    const IconComponent = iconComponents[icon];

    return (
    <CardContainer>
        <IconSvg src={IconComponent}/>
        {/* <IconComponent/> */}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}

Card.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;
