import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App.jsx'
import Navbar from "./components/NavBar";
import Croyance from './sections/Croyance.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/croyance' element={<Croyance />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
