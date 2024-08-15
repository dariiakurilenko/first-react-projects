import './index.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)
  function addCount(){
    setCount(prev => prev+1)
  }
  function subtractCount(){
    setCount(prev => prev-1)
  }
  return (
    <div className='App'>
      <div className='container'>
        <h2>Counter: </h2>
        <h1>{count}</h1>
        <button className='minus' onClick={subtractCount}>-1 Minus</button>
        <button className='plus' onClick={addCount}>Plus +1</button>
      </div>
    </div>
  );
}

export default App;
