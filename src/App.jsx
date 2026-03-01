import React from 'react'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import DarkMode from './components/DarkMode.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <DarkMode/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
