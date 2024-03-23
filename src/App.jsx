import { useState } from 'react'
import HamburgerNavbar from './components/navbar/Navbar'
import Home from './pages/Home'
import UpComing from './pages/upComing'
import Background from './pages/background'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import WriteUserData from './Firebase/Add'
import GetData from './Firebase/GetData'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>

 


<BrowserRouter>
           <Routes>
          <Route path="/" element={< Home/>} />
         
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/MoviesDetails" element={<MovieDetail/>} />
          <Route path="/GetData" element={<GetData/>} />
          <Route path="/AddMovie" element={<WriteUserData/>} />
        </Routes>
      
    </BrowserRouter>



 
    </>
  )
}

export default App
  