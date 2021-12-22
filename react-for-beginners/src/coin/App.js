import {useEffect, useState} from "react";

function App () {
    const [loading, setLoading] = useState(true);
    const [coin , setCoin] = useState([])
    const [money,setMoney] = useState(0);
    const [coinValue,setCoinValue] = useState(0);
    const onChange = (event) => setMoney(event.target.value)
    const coinChange = (event) => setCoinValue(event.target.value)
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then(json => {
            setCoin(json);})
            setLoading(false);
    }, [])
    return (
    <div>
        <h1>The Coins! ({coin.length})</h1>
        {loading ? <strong>This loading...</strong> : null}
        <form>
            <input onChange={onChange} value={money} placeholder="Your have money" type="number"  />    
        <br />
        <select onChange={coinChange}>
            <option>Select Coin !!</option>
            {coin.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</option>)}
        </select>
        <br />
            <input disabled="true" placeholder="Coin" value={ money / coinValue } type="number" />
        </form>
    </div>
    )
}

export default App;
