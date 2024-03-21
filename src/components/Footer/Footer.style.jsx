import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTiktok, FaYoutube  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { theme } from "../../Theme";

export const FooterSection = styled.footer`
    width: 100vw;
    height: auto;
    padding: 5rem 3rem;
    background-color: ${theme.colors.secondary_color};
`
export const Informations = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    @media(max-width: 1000px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media(max-width: 700px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 500px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
    }
`
export const InformationsBlock = styled.div`
    color: #C1C9D2;
    width: auto;

    display:flex;
    flex-direction:column;
    gap: 1rem;
`
export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: normal;
`
export const LinksInfo = styled.a`
    font-size: 1.6rem;
    font-weight: bold;
`
export const DownloadAppContainer = styled.div`

@media(max-width: 400px){
    display:flex;
    flex-direction:column;
    gap: 1rem;
}
`
export const AppImage = styled.img`
    width: 20rem;
`
export const QrCode = styled.img`
width: 15rem;
`
export const SocialMediaContainer = styled.div``
export const SocialMediaIconsContainer = styled.div`
    color:${theme.colors.green};
    font-size: 3rem;
    display:flex;
    gap: 1rem;
    margin-top: 1rem;

    @media(max-width: 600px){
        font-size: 4rem;
    }
`
export const InstagramIcon = styled(RiInstagramFill)``
export const FacebookIcon = styled(FaFacebook)``
export const TiktokIcon = styled(FaTiktok)``
export const TwitterIcon = styled(FaSquareXTwitter)``
export const YoutubeIcon = styled(FaYoutube)``

export const CopyContainer = styled.div``
export const CopyText = styled.p``

