import { AppImage, DownloadAppContainer, FacebookIcon, FooterSection, Informations, InformationsBlock, InstagramIcon, LinksInfo, QrCode, SocialMediaContainer, SocialMediaIconsContainer, TiktokIcon, Title, TwitterIcon, YoutubeIcon } from "./Footer.style"
import appStore from '../../assets/appStore.svg'
import playStore from '../../assets/playStore.svg'
import qrCode from '../../assets/qrCode.svg'

export default function Footer() {
  return (
    <FooterSection>
        <Informations>
          <InformationsBlock>
            <Title>Links Rápidos</Title>
            <LinksInfo>págna inicial</LinksInfo>
            <LinksInfo>serviços</LinksInfo>
            <LinksInfo>sobre nós</LinksInfo>
            <LinksInfo>FAQ</LinksInfo>
            <LinksInfo>contato</LinksInfo>
          </InformationsBlock>
          <InformationsBlock>
            <Title>Políticas e Termos</Title>
            <LinksInfo>política de privacidade</LinksInfo>
            <LinksInfo>termos de uso</LinksInfo>
            <LinksInfo>aviso legal</LinksInfo>
            <LinksInfo>política de cookies</LinksInfo>
          </InformationsBlock>
          <InformationsBlock>
            <Title>Informações de Contato</Title>
            <LinksInfo>465, Crypto Avenue, BitTown, CryptoLand.</LinksInfo>
            <LinksInfo>+55 (11) 99999-9999</LinksInfo>
            <LinksInfo>info@cyberwealth.io</LinksInfo>
          </InformationsBlock>
          <DownloadAppContainer>
            <Title>Baixe o App</Title>
              <AppImage src={appStore} />
              <AppImage src={playStore} />
          </DownloadAppContainer>
          <QrCode src={qrCode}/>
          <SocialMediaContainer>
          <Title>Redes Sociais</Title>
          <SocialMediaIconsContainer>
            <InstagramIcon/>
            <FacebookIcon/>
            <TiktokIcon/>
            <TwitterIcon/>
            <YoutubeIcon/>
          </SocialMediaIconsContainer>
          </SocialMediaContainer>
        </Informations>
    </FooterSection>
  )
}
