import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componets/navBar/NavBar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlacesOrder from './pages/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path='/Order' element={<PlacesOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
