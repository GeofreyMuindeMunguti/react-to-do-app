import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';


function App(){
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
