import { BorderBottom } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [nav, setnav] = useState(false)
  const [Selected, setSelected] = useState(false)
  const handleclick = () => {
    setnav(!nav)
    console.log(nav)
    console.log('hello')
  }
  console.log(nav)

  const handleSelectedclick = (value) => {
    setSelected(value)
  }
  return (
    <>


      <div class='flex justify-center items-center sm:hidden md:flex mb-3'>
        <div class=' flex-[15%] flex justify-end'> <img src="logo.png" alt="" /></div>
        <ul class=' flex space-x-6 justify-center flex-[60%]  ' >
          <li class="  text-sm font-semibold" ><a href=""> <Link to='/Home' onClick={() => handleSelectedclick('Home')} class={`${Selected == 'Home' && 'border-b-2 border-yellow-300'}`}>Home</Link></a></li>
          <li class="   text-sm font-semibold"><a href=""><Link to='/About' onClick={() => handleSelectedclick('About')} class={`${Selected == 'About' && 'border-b-2 border-yellow-300'}`}> About</Link></a></li>
          <li class="   text-sm font-semibold"><a href=""> <Link to='/Pricing' onClick={() => handleSelectedclick('Pricing')} class={`${Selected == 'Pricing' && 'border-b-2 border-yellow-300'}`}>Pricing</Link></a></li>
          <li class="    text-sm font-semibold"><a href=""> <Link to='/Token' onClick={() => handleSelectedclick('Tokens')} class={`${Selected == 'Tokens' && 'border-b-2 border-yellow-300'}`}>Tokens</Link></a></li>
          <li class="    text-sm font-semibold"><a href=""> <Link to='/Blog' onClick={() => handleSelectedclick('Blog')} class={`${Selected == 'Blog' && 'border-b-2 border-yellow-300'}`}>Blog</Link></a></li>
          <li class="   text-sm font-semibold"><a href=""><Link to='/ContactUs' onClick={() => handleSelectedclick('ContactUs')} class={`${Selected == 'ContactUs' && 'border-b-2 border-yellow-300'}`}>contact us</Link></a></li>
        </ul>
        <div class='flex-[25%] flex space-x-4 justify-center '>
          <button class="bg-yellow-400 w-20  rounded-2xl h-10  text-white shadow-lg text-sm ">LOGIN</button>
          <button class="w-20  rounded-2xl h-10 text-yellow-400  border border-yellow-400 text-sm ">SIGN UP</button>
        </div>
      </div>



      <div class='flex mt-[10px] mx-[10px] sm:flex md:hidden mb-3'>
        <div class='flex-[10%]'>
          <img class='w-6 h-6 cursor-pointer' src="./hamburger.png" alt="" onClick={handleclick} />
        </div>
        <div class='flex-[90%] flex space-x-4 justify-end '>
          <button class="bg-yellow-400 w-[63px]  rounded-xl h-[33px]  text-white shadow-lg text-sm">LOGIN</button>
          <button class="w-[63px]  rounded-xl h-[33px]   text-yellow-400  border border-yellow-400 text-sm">SIGN UP</button>
        </div>
      </div>


      {nav &&


        <ul class=' text-center ' >
          <li class="  text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300" ><  a href=""> <Link to='/Home' onClick={() => handleSelectedclick('Home')} class={`${Selected == 'Home' && 'border-b-2 border-yellow-300'}`}>Home</Link></a></li>
          <li class="   text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300"><a href=""><Link to='/About' onClick={() => handleSelectedclick('About')} class={`${Selected == 'About' && 'border-b-2 border-yellow-300'}`}> About</Link></a></li>
          <li class="   text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300">< a href=""> <Link to='/Pricing' onClick={() => handleSelectedclick('Pricing')} class={`${Selected == 'Pricing' && 'border-b-2 border-yellow-300'}`}>Pricing</Link></a></li>
          <li class="    text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300">< a href=""> <Link to='/Token' onClick={() => handleSelectedclick('Tokens')} class={`${Selected == 'Tokens' && 'border-b-2 border-yellow-300'}`}>Tokens</Link></a></li>
          <li class="    text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300">< a href=""> <Link to='/Blog' onClick={() => handleSelectedclick('Blog')} class={`${Selected == 'Blog' && 'border-b-2 border-yellow-300'}`}>Blog</Link></a></li>
          <li class="   text-sm font-semibold my-[6px] border-b-[1px] border-b-[#ebebec] hover:bg-yellow-300"><a href=""><Link to='/ContactUs' onClick={() => handleSelectedclick('ContactUs')} class={`${Selected == 'ContactUs' && 'border-b-2 border-yellow-300'}`}>contact us</Link></a></li>
        </ul>
      }








    </>
  )
}

export default Navbar