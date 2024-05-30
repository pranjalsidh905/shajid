import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ProductPage from './Pages/ProductPage/ProductPage';
import LoginPages from './Pages/LoginPages/LoginPages';
import SignUp from './Components/SignUp/SignUp';
import SignupPge from './Pages/SignupPge/SignupPage';
import ResetPage from './Pages/ResetPage/ResetPage';
import OtpPage from './Pages/OtpPage/OtpPage';
import AddToCartPage from './Components/AddtoCart/AddtoCart';
import AddToCartButton from './Pages/AddPage/AddPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import ContactDetail from './Components/ContactDetail/ContactDetail';
import ContactPage from './Pages/ContactPage/ContactPage';
// import AddPage from './Pages/AddPage/AddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/signup' element={<SignupPge />} />
        <Route path='/resetpass' element={<ResetPage />} />
        <Route path='/otpverify' element={<OtpPage />} />
        <Route path="/addcart/" element={<AddToCartButton />} />
        <Route path='/payment' element={<PaymentPage/> } />
        <Route path='/contact' element={<ContactPage/> } />
      </Routes>
    </BrowserRouter>
    // <AddToCartPage/>
  )
}

export default App