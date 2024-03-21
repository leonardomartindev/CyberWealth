import { NavContainer, LeftContainer, RightContainer, Ul, Li, Logo, BtnLogin, BtnOpenAccount, ArrowIcon, TradePopup, TradePopupH2, TradePopupP, TradeLi, MenuIcon, CloseIcon, BurguerButton1, BurguerButton2, BurguerContainerBtn } from "./Nav.style.jsx";
import LogoImage from '../../assets/logo.svg'
import { useState, useEffect } from "react"

export default function Nav() {
  const [showTradePopup, setShowTradePopup] = useState(false); // Estado para controlar a exibição da janela de trade
  const [popupHovered, setPopupHovered] = useState(false); // Estado para controlar se o popup está sendo hover ou não
  const [liHovered, setLiHovered] = useState(false); // Estado para controlar se a li está sendo hover ou não
  const [burguerMenuActive, setBurguerMenuActive ] = useState(false)
  const [bonusLi, setBonusLi] = useState(false)
  const handleMenu = ()=>{
    setBurguerMenuActive(!burguerMenuActive)
    setBonusLi(!bonusLi)
    if (burguerMenuActive) {
      document.documentElement.style.overflow = ""; // Restaura a rolagem
    } else {
    document.documentElement.style.overflow = "hidden"; // Impede a rolagem
  }  }

  useEffect(() => {
    if ((popupHovered || liHovered) && window.innerWidth > 1000) {
      setShowTradePopup(true);
    } else {
      const timeout = setTimeout(() => setShowTradePopup(false), 200); // Ajuste o tempo conforme necessário
      return () => clearTimeout(timeout);
    }
  }, [popupHovered, liHovered]);

  return (
    <div>
      <NavContainer >
        <Logo src={LogoImage}/>
        <LeftContainer burguerMenuActive={burguerMenuActive}>
          <Ul>
            <Li>
              <CloseIcon onClick={handleMenu}/>
            </Li>
            <BurguerContainerBtn>
              <BurguerButton1>login</BurguerButton1>
              <BurguerButton2>abra sua conta</BurguerButton2>
            </BurguerContainerBtn>
            <Li>
              <a href="#" >nossos serviços</a>
            </Li>
            <Li>
              <a href="#">moedas</a>
            </Li>
            <Li>
              <a href="#">faq</a>
            </Li>
            
            <Li
              onMouseEnter={() => setLiHovered(true)}
              onMouseLeave={() => setLiHovered(false)}
            >
              {/* Mostrar/Esconder a janela de trade com base no hover */}
              <a href="#">
                trade <ArrowIcon />
              </a>
              {showTradePopup && (
                <TradePopup
                  
                  onMouseEnter={() => setPopupHovered(true)}
                  onMouseLeave={() => setPopupHovered(false)}>
                    <div>
                      <ul>
                        <TradeLi>
                          <TradePopupH2>Noticias sobre criptomoedas</TradePopupH2>
                          <TradePopupP>Mantenha-se atualizado com as últimas notícias do mundo das criptomoedas</TradePopupP>
                        </TradeLi>
                        <TradeLi>
                          <TradePopupH2>Educação financeira</TradePopupH2>
                          <TradePopupP>Aprenda sobre criptomoedas, estratégias de investimento e maximização de lucros</TradePopupP>
                        </TradeLi>
                        <TradeLi>
                          <TradePopupH2>Análises de Mercado</TradePopupH2>
                          <TradePopupP>Acesse análises especializadas e insights sobre o mercado de criptomoedas</TradePopupP>
                        </TradeLi>
                      </ul>
                      <ul>
                        <TradeLi>
                          <TradePopupH2>FAQ - Perguntas Frequentes</TradePopupH2>
                          <TradePopupP>Encontre respostas para perguntas comuns sobre criptomoedas e segurança digital.</TradePopupP>
                        </TradeLi>
                        <TradeLi>
                          <TradePopupH2>Eventos e Conferências</TradePopupH2>
                          <TradePopupP>Explore eventos, conferências e webinars relacionados a criptomoedas e blockchain.</TradePopupP>
                        </TradeLi>
                        <TradeLi>
                          <TradePopupH2>Parcerias e Programas de Afiliados</TradePopupH2>
                          <TradePopupP>Saiba mais sobre oportunidades de parceria e programas de afiliados com o CyberWealth.</TradePopupP>
                        </TradeLi>
                      </ul>
                    </div>
                </TradePopup>
              )}
            </Li>
          </Ul>
        </LeftContainer>
        <RightContainer>
        <BtnLogin>
          entrar
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </BtnLogin> 
          <BtnOpenAccount>abra sua conta 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </BtnOpenAccount>
        </RightContainer>
        <MenuIcon onClick={handleMenu}/>
      </NavContainer>
    </div>
  );
}