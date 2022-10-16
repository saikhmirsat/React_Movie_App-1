import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Bollywood from '../Pages/Bollywood'
import DetailPage from '../Pages/DetailPage'
import Hollywood from '../Pages/Hollywood'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Movie from '../Pages/Movie'
import Notfound from '../Pages/Notfound'
import SignUp from '../Pages/SignUp'


export default function Allroute() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movies/:detailpage' element={<DetailPage />}></Route>
      <Route path='*' element={<Notfound />}></Route>
      <Route path='/movies' element={<Movie />}></Route>
      <Route path='/hollywood' element={<Hollywood />}></Route>
      <Route path='/bollywood' element={<Bollywood />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  )
}
