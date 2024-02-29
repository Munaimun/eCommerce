import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/HomeComponent';

function App(){
  return(
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
      )
}




export default App;
