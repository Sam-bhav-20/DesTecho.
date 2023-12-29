import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import FindTalent from './pages/FindTalent'
import 'bootstrap/dist/css/bootstrap.min.css';
import LearnDesign from './pages/LearnDesign'
import GoPro from './pages/GoPro'
import Inspiration from './pages/Inspiration'
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
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App
