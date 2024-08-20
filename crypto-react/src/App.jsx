import React from 'react'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { getCoins } from './api/api'

function App() {
  const [balance, setBalance] = React.useState(5000)
  const [coins, setCoins] = React.useState([])
  const [filteredCoins, setFilteredCoins] = React.useState([])

  React.useEffect(() => {
    const fetchData = async() =>{
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, []);
  console.log(coins)
  return(
    <>
      <Header />
      <Main 
      coins={coins} 
      setCoins={setFilteredCoins}
      balance={balance} 
      setBalance={setBalance}
      filteredCoins={filteredCoins}
      />
    </>
    
  )
}

export default App
