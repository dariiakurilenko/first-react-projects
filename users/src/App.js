import React from 'react';
import './index.scss';
import { Users } from './components/Users';
import { Success } from './components/Success';
function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
  const [invites, setInvites] = React.useState([])
  const[success, setSuccess] = React.useState(false)
  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(response => response.json()).then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.log(err)
      alert('ошибка при получении данных')
    }).finally(() => setLoading(false))
  }, []);

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    }else{
      setInvites(prev => [...prev, id])
    }
  }
  const onClickSentInvites =() =>
    setSuccess(true)
  return (
    <div className="App">
      {
        success ? (<Success count={invites.length}/>) :
      (
      <Users 
      onChangeSearch={onChangeSearch} 
      searchValue={searchValue} 
      items={users} 
      isLoading={isLoading}
      onClickInvite={onClickInvite}
      invites={invites}
      onClickSentInvites = {onClickSentInvites}
      />
      )
    }
    </div>
  );
}

export default App;
