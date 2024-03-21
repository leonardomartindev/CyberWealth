const fetchBitCoin = async(coin) =>{
    const response = await fetch(`https://api.coincap.io/v2/assets/${coin}`)
    const data = await response.json();
    return data;
};

export default fetchBitCoin;

