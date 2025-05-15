import React from 'react'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
