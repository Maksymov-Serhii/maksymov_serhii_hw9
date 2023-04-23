import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../MainPage/MainPage';
import Contacts from '../Contacts/Contacts';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import { useState } from 'react';
import PrivatePage from '../PrivatePage/PrivatePage';
import AgeConfirmationPage from '../AgeConfirmationPage/AgeConfirmationPage';

const App = () => {
  const [isUserOver18, setIsUserOver18] = useState(false);

  const handleUserAgeConfirmation = () => {
    setIsUserOver18(true);
  };

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
            {!isUserOver18 && (
              <Route
                path="/private"
                element={<Navigate to="/age-confirmation" replace />}
              />
            )}
            {isUserOver18 && (
              <Route path="/private" element={<PrivatePage />} />
            )}
            <Route
              path="/age-confirmation"
              element={
                <AgeConfirmationPage
                  onAgeConfirmation={handleUserAgeConfirmation}
                />
              }
            />
          </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
