import { ToastContainer } from 'react-toastify';
// import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/index.jsx';
import Home from './Pages/Home/index.jsx';
import About from './Pages/About/index.jsx';
import Work from './Pages/Works/index.jsx';
// import Team from './Pages/Team/index.jsx'
import Services from './Pages/Services/index.jsx';
import Portfolio from './Pages/Portfolio/index.jsx';
import FAQs from './Pages/FAQs/index.jsx';
import Contact from './Pages/Contact/index.jsx';
import Scroll from './Pages/Scroll/index.jsx';
import WhatsApp from './Pages/Whatsapp/index.jsx';
import Footer from './Pages/Footer/index.jsx';
// import Academy from'./Pages/Academy/Academy.jsx';
import React from 'react';

const App = () => {
  return <div>

    <ToastContainer/>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    {/* <Team/> */}
    <Services/>
    <Portfolio/>
    <FAQs/>
    <Contact/>
    <Scroll/>
    <WhatsApp/>
    <Footer/>
    {/* <Routes>
    <Route path="/Academy" element={<Academy/>} />
    </Routes> */}
  </div>
  };

  export default App;