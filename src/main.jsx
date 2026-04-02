import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
// import Academy from './Pages/Academy/Academy.jsx'; // adjust this path based on your file structure
import Navbar from './Pages/Navbar/index.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/Academy" element={<Academy />} /> */}
      </Routes>
      </>
    </BrowserRouter>
  );
} else {
  console.error('Root element not found!');
}
