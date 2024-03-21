import Card from "./CardComponent/Card"
import { ServiceCardsContainer, ServiceSection, ServiceTitle } from "./Servico.style"


export default function Servico() {
  return (
    <ServiceSection>
        <ServiceTitle>Nossos Serviços</ServiceTitle>
        <ServiceCardsContainer>
            <Card
            icon="BitCoin"
            title="Compra e Venda de Criptomoedas"
            description="No CyberWealth, você tem acesso a uma plataforma simples e segura para negociar criptomoedas. Com poucos cliques, aproveite as melhores oportunidades do mercado. Seja você um novato ou um investidor experiente, nossa plataforma intuitiva atende a todos. Por exemplo, compre Bitcoin quando o preço estiver baixo e venda quando estiver alto. Com suporte dedicado, suas transações são rápidas e sem complicações. Compre e venda criptomoedas com confiança no CyberWealth."
            />
            <Card
            icon="Wallet"
            title="Carteira Digital Segura"
            description="Mantenha suas criptomoedas seguras com nossa carteira digital. Protegida por tecnologia de ponta, sua segurança é garantida contra hackers e fraudes. A interface amigável permite acompanhar facilmente seus ativos e fazer transações com rapidez. Não arrisque a segurança de seus ativos digitais. Escolha a carteira digital do CyberWealth e tenha tranquilidade."
            />
            <Card
            icon="Finance"
            title="Investimentos em Criptomoedas"
            description="Aumente seu patrimônio com nossas opções de investimento em criptomoedas. De compra direta a estratégias avançadas como staking, oferecemos oportunidades lucrativas. Com análises de mercado em tempo real, você toma decisões informadas. Aproveite os benefícios dos investimentos em criptomoedas com o CyberWealth e veja seu patrimônio crescer."
            />
            <Card
            icon="Transfer"
            title="Transferências Instantâneas"
            description="Transfira criptomoedas de forma rápida e eficiente, eliminando as longas esperas bancárias. Com o CyberWealth, envie Bitcoin em minutos, sem taxas elevadas. Utilizando blockchain, suas transações são seguras e transparentes. Simplifique suas transferências com o CyberWealth e movimente seus ativos digitalmente, quando precisar."
            />
        </ServiceCardsContainer>
    </ServiceSection>
  )
}
