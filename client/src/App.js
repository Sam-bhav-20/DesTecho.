import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import FindTalent from './pages/FindTalent'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<FindTalent/>}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App
