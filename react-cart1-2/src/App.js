import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';
import Login from './Pages/Login';
import Details from './Pages/Details';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Mens' element={<Mens/>}></Route>
        <Route path='/Womens' element={<Womens/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Details' element={<Details />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
