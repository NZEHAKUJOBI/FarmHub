import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import { News } from './components/pages/News';
import { Contact } from './components/pages/Contact';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}></Route>
        <Route path='/signup' element ={<Signup/>}></Route>
        <Route path='/dashboard' element ={<Dashboard/>}></Route>
        <Route path='/About' element ={<about/>}></Route>
        <Route path='/Home' element ={<home/>}></Route>
        <Route path='/News' element ={<News/>}></Route>
        <Route path='/Contact' element ={<Contact/>}></Route>

      </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
