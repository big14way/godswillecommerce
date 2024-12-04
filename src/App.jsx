<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex min-h-screen">
            <SideBar />
          </div>
          <div className="flex-grow w-full mx-auto my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<Add token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
    <ToastContainer />
    <Navbar />
    <SearchBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/collection' element={<Collection/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product/:productId' element={<Product/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/place-order' element={<PlaceOrder/>} />
    <Route path='/orders' element={<Orders/>} />

    </Routes>
    <Footer/>
    </div>
  )
}

export default App
>>>>>>> 0601e29364d98b0629fb46ca063dfb012e288a37
