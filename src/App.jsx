import React from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Carosel from './Components/Carosel'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import Token from './Pages/Token'
import Blog from './Pages/Blog'
import Post from './Pages/Post'
import ContactUS from './Pages/ContactUS'
import Navbar from './Components/Navbar'
import AccordionUsage from './Components/Accordian'
import SmallCarosel from './Components/SmallCarosel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataNotfound from './Pages/DataNotfound'

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Token' element={<Token/>} />
          <Route path='/ContactUS' element={<ContactUS />} />
          <Route path='/Blog' element={<Blog />} />

        </Routes>

      </BrowserRouter>

{/* <DataNotfound/> */}

    </>
  )
}

export default App