import './index.css';
import React from 'react';

function App() {
  const [open, setOpen] = React.useState(false)
  function changeState(){
    setOpen(prev => !prev)
  }
  return (
    <div className='App'>
      <button onClick={changeState} className='open-modal-btn'>Open modal window</button>
       {open && (<div className='shadow'>
          <div className='modal-window'>
              <svg onClick={changeState} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmpvc20zMmdxeGZoNjY1YmtzcGM3cjlvZHdpbnNpZjBtbjRrbHYyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZXKZWB13D6gFO/giphy.gif' alt='gif'></img>
          </div>
        </div> )
        }
    </div>
  );
}

export default App;
