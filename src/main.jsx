import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App.jsx'
import Navbar from "./components/NavBar";
import Categories from './sections/home/Categories.jsx';
import Croyance from './sections/croyance/Croyance.jsx';
import CoursDetail from './sections/croyance/CoursDetail.jsx';
import Arabe from './sections/arabe/Arabe.jsx';
import ArabeDetail from './sections/arabe/ArabeDetail.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/croyance' element={<Croyance />} />
        <Route path="/croyance/:id" element={<CoursDetail />} />
        <Route path='/arabe' element={<Arabe />} />
        <Route path="/arabe/:id" element={<ArabeDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
