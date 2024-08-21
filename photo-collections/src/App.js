import React from 'react';
import './index.scss';
import Collection from './components/Collection';

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]

function App() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [collections, setCollections] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [loading, setIsLoading] = React.useState(true)

  

    React.useEffect(() => {
      setIsLoading(true)
      fetch(`https://66c58fea134eb8f43494b4b7.mockapi.io/photo_collection?${categoryId ? `category=${categoryId}` : ''}`).then(res => res.json()).then(json => {
        setCollections(json)
        console.log(json)
      }).catch(err => {
        console.log(err);
        alert('unable to load')
      }).finally(() => setIsLoading(false))
    },[categoryId])

    const onSetValue = (event) => {
      setValue(event.target.value)
      console.log(value)
    }
    
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, index)=> <li onClick={() => setCategoryId(index)} className={categoryId === index? 'active': ''} key={obj.name}>{obj.name}</li>)
          }
        </ul>
        <input value = {value} onChange={onSetValue} className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {loading? (<h2>Идет загрузка...</h2>) :  
        (collections.filter(obj => {
          return obj.name.toLowerCase().includes(value.toLowerCase())
        }))
        .map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos}/>)}
      </div>
    </div>
  );
}

export default App;