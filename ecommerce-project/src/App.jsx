import axios from './api';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { Tracking } from './pages/Tracking'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
  const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
  };

  useEffect(() => {
      loadCart();
  }, []);


  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<Tracking cart={cart} />} />
    </Routes>
  )
}

export default App
