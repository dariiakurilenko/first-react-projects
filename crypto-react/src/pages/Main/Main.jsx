import styles from './styles.module.css'
import Card from '../../components/Card/Card'
import CoinsList from '../../components/CoinsList/CoinsList'
import FilterBlock from '../../components/FilterBlock/FilterBlock'
const Main = ({balance, setBalance, coins, filteredCoins, setCoins}) => {
    return(
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock coins={coins} setCoins={setCoins}/>
            {coins.length > 0 ? <CoinsList coins={filteredCoins}/> : <div>Loading...</div>}
        </main>
    )
}
export default Main