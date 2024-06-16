import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import FindTalent from './pages/FindTalent'
import 'bootstrap/dist/css/bootstrap.min.css';
import LearnDesign from './pages/LearnDesign'
import GoPro from './pages/GoPro'
import Inspiration from './pages/Inspiration'
import MainInspration from './pages/MainInspration'
import Discover from './components/Inspiration_pages/Discover'
import Animation from './components/Inspiration_pages/Animation'
import Branding from './components/Inspiration_pages/Branding'
import Typography from './components/Inspiration_pages/Typography'
import Print from './components/Inspiration_pages/Print'
import ProductDesign from './components/Inspiration_pages/ProductDesign'
import WebDesign from './components/Inspiration_pages/WebDesign'
import Illustration from './components/Inspiration_pages/Illustration'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<FindTalent/>}/>
      <Route path="/learndesign" element={<LearnDesign/>}/>
      <Route path="/gopro" element={<GoPro/>}/>
      <Route path="/inspiration" element={<Inspiration/>}/>
      <Route path="/inspiration/discover" element={<Discover/>}/>
      <Route path="/inspiration/animation" element={<Animation/>}/>
      <Route path="/inspiration/branding" element={<Branding/>}/>
      <Route path="/inspiration/typography" element={<Typography/>}/>
      <Route path="/inspiration/print" element={<Print/>}/>
      <Route path="/inspiration/productDesign" element={<ProductDesign/>}/>
      <Route path="/inspiration/webdesign" element={<WebDesign/>}/>
      <Route path="/inspiration/illustration" element={<Illustration/>}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App
