import './styles.css'

const CoinsList = ({coins}) =>{
    return(
        <ul className='coins-list'>
            {coins.map(coin => {
                return <li className= 'coin-item' key={coin.uuid}>
                    <div className='coin-item__info'>
                        <img className='coin-item__logo' src={coin.iconUrl} alt={coin.name}></img>
                        <p style={{color: coin.color}}>
                            {coin.name}/USD
                        </p>
                    </div>
                    <div className='coin-item__price'>
                        <p style={{color: coin.color}}>
                            {(+coin.price).toFixed(2)} USD
                        </p>
                        <p style={{color: coin.color}}>
                            {(+coin.btcPrice).toFixed(2)} BTC
                        </p>
                    </div>
                </li>
            })}
        </ul>
    )
}
export default CoinsList