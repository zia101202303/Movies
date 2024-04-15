import React from 'react'
import Footer from '../Components/Footer'

function Token() {



    return (
        <>
            <div class='text-center'>
                <h1 class='text-[60px] font-semibold text-yellow-400 mt-7 mb-3'>Tokens</h1>
                <div class='flex justify-center' >
                    <p class='md:w-[30%] sm:w-[80%]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aenean dis placerat.
                        Scelerisque</p>
                </div>
            </div>















<div class=' pl-[80px]  overflow-auto'>
            <table class='w-full '>
  <tr class='border-b border-gray-100'>
    <th class='py-[30px]  w-[200px] min-w-[200px]'>Name</th>
    <th class='py-[30px]  w-[200px] min-w-[200px]'>Description</th>
    <th class='py-[30px]  w-[200px] min-w-[200px]'>Market Cap</th>
    <th class='py-[30px]  w-[200px] min-w-[200px]'>Volume</th>
    <th class='py-[30px]  w-[200px] min-w-[200px]'>Website</th>
  </tr>
  <tr class='border-b border-gray-100 w-[200px] min-w-[200px]'>
    <td class='flex py-[30px]  items-center '> <img class='mr-[10px]' src="token1.png" alt="" /> Bitcoin <div class='bg-yellow-400 text-center md:block sm:hidden w-[40px] h-[30px] ml-5 text-white rounded-[15px]'>TRX</div></td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
    <td>$252,844,036,453 USD</td>
    <td>$30,504,879,301 USD</td>
    <td>Visit Website</td>
  </tr>
  <tr class='border-b border-gray-100 w-[200px] min-w-[200px]'>
  <td class='flex py-[30px] items-center '> <img  class='mr-[10px]'src="token 3.png" alt="" /> Bitcoin <div class='bg-yellow-400 text-center md:block sm:hidden w-[40px] h-[30px] ml-5 text-white rounded-[15px]'>TRX</div></td>

    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
    <td>$252,844,036,453 USD</td>
    <td>$30,504,879,301 USD</td>
    <td>Visit Website</td>
  </tr>
  <tr class='border-b border-gray-100 w-[200px] min-w-[200px]'>
  <td class='flex py-[30px] items-center '> <img  class='mr-[10px]'src="token4.png" alt="" /> Bitcoin <div class='bg-yellow-400 text-center md:block sm:hidden w-[40px] h-[30px] ml-5 text-white rounded-[15px]'>TRX</div></td>

    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
    <td>$252,844,036,453 USD</td>
    <td>$30,504,879,301 USD</td>
    <td>Visit Website</td>
  </tr>
  <tr class='border-b border-gray-100 w-[200px] min-w-[200px]'>
  <td class='flex py-[30px] items-center '> <img  class='mr-[10px]'src="token5.png" alt="" /> Bitcoin <div class='bg-yellow-400 text-center md:block sm:hidden w-[40px] h-[30px] ml-5 text-white rounded-[15px]'>TRX</div></td>

    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
    <td>$252,844,036,453 USD</td>
    <td>$30,504,879,301 USD</td>
    <td>Visit Website</td>
  </tr>
 
</table>
</div>
            <Footer />
        </>
    )
}

export default Token


