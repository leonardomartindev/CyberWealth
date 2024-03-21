import { useEffect, useState } from "react";
import fetchBitCoin from "../../api";
import {
    CompreAgora,
    CompreRapidoContainer,
    CompreRapidoDescription,
    CompreRapidoSubTitle,
    CompreRapidoTitle,
    CriptoContainer,
    CriptoTitle,
    DownContainer,
    GraphicContainer,
    GraphicTable,
    TableBody,
    TableTd,
    TableTr
} from "./Cripto.style";
import BitcoinIcon from '../../assets/bitcoinIcon.svg';
import EthereumIcon from '../../assets/ethereumIcon.svg';
import BnbIcon from '../../assets/bnbIcon.svg';
import XrpIcon from '../../assets/xrpIcon.svg';

const moedas = [
    { nome: "bitcoin", icone: BitcoinIcon },
    { nome: "ethereum", icone: EthereumIcon },
    { nome: "cardano", icone: BnbIcon },
    { nome: "xrp", icone: XrpIcon }
];

export default function Cripto() {
    const [criptoData, setCriptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(
                    moedas.map(async (moeda) => {
                        const response = await fetchBitCoin(moeda.nome);
                        const price = parseFloat(response.data.priceUsd);
                        const changePercent24Hr = parseFloat(response.data.changePercent24Hr);
                        return { ...moeda, price, changePercent24Hr };
                    })
                );
                setCriptoData(data);
            } catch (error) {
                console.error("Ocorreu um erro ao buscar os dados:", error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    const formatarVariacaoPercentual = (variacao) => {
        if (variacao === undefined) return '';

        const cor = variacao < 0 ? '#DC3E3E' : '#7FFF00';
        const sinal = variacao > 0 ? '+' : '';

        return <span style={{ color: cor }}>{sinal}{variacao.toFixed(2)}%</span>;
    };

    return (
        <CriptoContainer>
            <CriptoTitle>Moedas</CriptoTitle>
            <DownContainer>
                <GraphicContainer>
                    <GraphicTable>
                        <TableBody>
                            {criptoData.map((moeda) => (
                                <TableTr key={moeda.nome}>
                                    <TableTd>
                                        <p><img src={moeda.icone} alt="" />{moeda.nome.toUpperCase()}</p>
                                    </TableTd>
                                    <TableTd>{moeda.price ? moeda.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : "-"}</TableTd>
                                    <TableTd>{formatarVariacaoPercentual(moeda.changePercent24Hr)}</TableTd>
                                </TableTr>
                            ))}
                        </TableBody>
                    </GraphicTable>
                </GraphicContainer>
                <CompreRapidoContainer>
                    <CompreRapidoTitle>compre rápido com apenas alguns cliques</CompreRapidoTitle>
                    <CompreRapidoSubTitle>Comece com apenas 10 dólares</CompreRapidoSubTitle>
                    <CompreRapidoDescription>Realize suas transações de criptomoedas de forma conveniente e segura, incluindo cartão de crédito, conta bancária ou PIX. Com essas opções de pagamento flexíveis, você pode adquirir suas criptomoedas preferidas de maneira rápida e sem complicações.</CompreRapidoDescription>
                    <CompreAgora>compre agora</CompreAgora>
                </CompreRapidoContainer>
            </DownContainer>
        </CriptoContainer>
    );
}
