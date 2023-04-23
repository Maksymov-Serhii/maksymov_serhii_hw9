import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../MainPage/MainPage';
import Contacts from '../Contacts/Contacts';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';

function App() {
  return (
    <div className="App">
      <div className='shop'>
        <h3>Internet Shop</h3>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<ProductItem />} />
          </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
