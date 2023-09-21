import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import './App.css'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App