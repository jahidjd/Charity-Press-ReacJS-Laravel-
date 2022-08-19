import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Preloader from './pages/Preloadper';
import Donation from './pages/Donation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}></Route>
      <Route path='/about'  element={<About/>}></Route>
      <Route path='/causes' element={<Causes/>}></Route>
      <Route path='/events'  element={<Events/>}></Route>
      <Route path='/blog'  element={<Blog/>}></Route>
      <Route path='/contact'  element={<Contact/>}></Route>
      <Route path='/preloader'  element={<Preloader/>}></Route>
      <Route path='/donation'  element={<Donation/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
