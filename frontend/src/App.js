import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}></Route>
        <Route path='/signup' element ={<Signup/>}></Route>

      </Routes>
    </BrowserRouter>
   
  
  );
}

export default App;
