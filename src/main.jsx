import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ProductList from './Components/Product/ProductList.jsx'; 
import Mycart from './Components/Mycart/Mycart.jsx';
import Login from './Components/Login/Login.jsx';

const router = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />  {/* ✅ Correct way to set Home as default */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="mycart" element={<Mycart />} />
      <Route path="product" element={<ProductList />} /> {/* ✅ No props needed */}
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>
);
