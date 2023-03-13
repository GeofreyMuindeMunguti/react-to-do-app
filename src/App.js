import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Root from './components/Root';
import { useState } from 'react';


function App(){
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("authenticated") || false)

  return (
    <div className='wrapper'>
      <BrowserRouter>
        {isLoggedIn ? <Root/> : <Login setLoggedIn={setLoggedIn}/>}
      </BrowserRouter>
    </div>
  )
}

export default App;
