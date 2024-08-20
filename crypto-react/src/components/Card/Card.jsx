import './styles.css'
import WithRuBalance from '../Helpers/hoc/withRuBalance'
const Card = ({balance, setBalance, ruBalance}) => {
    console.log({ruBalance})
    return(
        <div className='card'>
            <div className='card-block'>
                <p>CRYPTO FINANCE</p>
                <button onClick={() => setBalance(prev => prev + 1000)}>Add money</button>
            </div>
            
            <div className='card-block'>
                <p>Daria</p>
                <p>{balance}$</p>
            </div>
            
        </div>
    )
}
export default WithRuBalance(Card)