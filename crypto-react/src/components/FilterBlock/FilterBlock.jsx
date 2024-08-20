import './style.css'
import React from 'react'

const FilterBlock = ({coins, setCoins}) => {
    const [value, setValue] = React.useState('')
    React.useEffect(() => {
        const filteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(value)
        })
        setCoins(filteredCoins)
    }, [value])
    return (
        <div className='filter-block'>
            <input 
            className='input' 
            type='text' 
            placeholder='bitcoin' 
            value={value} 
            onChange={(e) => setValue(e.target.value)}>
            </input>
        </div>
    )
}
export default React.memo(FilterBlock) //наша компонента будет ре-рендериться только в том случае, если входные данные (пропсы) изменятся

//хук useMemo позволяет мемоизировать сложные вычисления, чтобы предотвратить повторное выполнение при каждом рендере компонента (кэширование)