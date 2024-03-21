import { useState } from "react";
import { FaqContainer, FaqTitle, QuestionAnswer, QuestionArrow, QuestionCard, QuestionTitle, QuestionsContainer } from "./Faq.style";

export default function Faq() {

    const questions = [
        { title: "Como faço para criar uma conta no CyberWealth?", answer: 'Para criar uma conta no CyberWealth, basta seguir alguns passos simples. Primeiramente, acesse o nosso site e localize o botão "Registrar" ou "Criar Conta". Em seguida, você será direcionado para uma página onde deverá fornecer algumas informações básicas, como seu nome completo, endereço de e-mail e criar uma senha segura. Após preencher esses dados, você provavelmente precisará confirmar seu endereço de e-mail clicando em um link enviado para a sua caixa de entrada. Uma vez feito isso, sua conta estará criada e pronta para ser usada. Lembre-se de revisar e concordar com os termos de uso e política de privacidade durante o processo de registro.'},
        { title: "Quais criptomoedas posso comprar no CyberWealth?", answer: 'No CyberWealth, você tem acesso a uma ampla variedade de criptomoedas para comprar e investir. Entre as opções disponíveis, incluem-se algumas das criptomoedas mais populares e amplamente negociadas, como Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), Bitcoin Cash (BCH), e muitas outras. Nossa plataforma oferece uma diversidade de opções para atender às suas necessidades de investimento e estratégias financeiras. Além disso, estamos sempre buscando adicionar novas criptomoedas promissoras à nossa lista, garantindo que nossos usuários tenham acesso às últimas oportunidades do mercado de criptomoedas.' },
        { title: "Como posso vender minhas criptomoedas?", answer: 'Vender suas criptomoedas no CyberWealth é um processo simples e seguro. Primeiramente, faça login na sua conta e navegue até a seção de "Carteira" ou "Saldo". Lá, você encontrará uma lista das criptomoedas disponíveis em sua carteira. Escolha a criptomoeda que deseja vender e clique na opção "Vender" ou "Trocar". Em seguida, você será solicitado a inserir a quantidade que deseja vender e confirmar a transação. Após a confirmação, o valor correspondente será creditado em sua conta na moeda fiduciária selecionada ou em sua carteira correspondente.' },
        { title: "Qual é a segurança da minha carteira de criptomoedas no CyberWealth?", answer: 'A segurança da sua carteira de criptomoedas é uma prioridade absoluta para o CyberWealth. Utilizamos uma combinação de medidas de segurança de última geração para garantir a proteção dos seus ativos digitais. Isso inclui a criptografia avançada de dados, a autenticação de dois fatores (2FA) para acessar sua conta, o armazenamento seguro dos fundos em carteiras frias (cold wallets) offline, e a implementação de protocolos rigorosos de segurança cibernética. Além disso, monitoramos constantemente atividades suspeitas e estamos comprometidos em manter nossos sistemas atualizados para proteger contra ameaças emergentes. Assim, você pode confiar que suas criptomoedas estão em boas mãos conosco.' }
    ];

    // Criando um estado para controlar o estado expandido de cada card
    const [questionActive, setQuestionActive] = useState(Array(questions.length).fill(false));

    const changeQuestion = (index) => {
        const updatedActive = [...questionActive];
        updatedActive[index] = !updatedActive[index];
        setQuestionActive(updatedActive);
    }

    return (
        <FaqContainer>
            <FaqTitle>Perguntas Frequentes</FaqTitle>
            <QuestionsContainer>
                {questions.map((el, index) => (
                    <QuestionCard key={el.title} onClick={() => changeQuestion(index)} active={questionActive[index].toString()}>
                        <QuestionTitle>
                            {el.title} <QuestionArrow active={questionActive[index]} />
                        </QuestionTitle>
                        <QuestionAnswer active={questionActive[index]}>
                            {el.answer}
                        </QuestionAnswer>
                    </QuestionCard>
                ))}
            </QuestionsContainer>
        </FaqContainer>
    )
}
