import { Button, Form, HeaderSection, ImageContainer, Input, Title, TitleContainer, Image, Squares } from './Header.style.jsx'
import CriptoImage from '../../assets/heroImage.svg'
import SquareImage from '../../assets/square.svg'


export default function Header() {
  return (
    <HeaderSection>
        <TitleContainer>
            <Title>As mais recentes tecnologias de segurança cibernética para proteger seus ativos digitais contra ameaças online, garantindo a segurança e a integridade de suas criptomoedas.</Title>
            <Form>
                <Input placeholder='E-mail/telefone'/>
                <Button type='submit'>
            Comece Agora
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Button>
            </Form>
        </TitleContainer>
        <ImageContainer>
                <Image src={CriptoImage}/>
            <Squares src={SquareImage}/>
        </ImageContainer>
    </HeaderSection>
  )
}