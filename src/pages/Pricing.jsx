import React from 'react'
import Footer from '../Components/Footer'
function Pricing() {
    return (

        <>
            <div class='text-center'>
                <h1 class='text-[80px] font-semibold text-yellow-400 mt-[30px]'>Pricing</h1>
                <div class='flex justify-center' >
                    <p class='md:w-[30%] sm:w-[80%] mt-[10px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aenean dis placerat.
                        Scelerisque</p>
                </div>
            </div>

            <div class='flex ml-[5%] flex-wrap my-14 justify-center'>
                <div class='flex flex-[20%] items-center m-[15px]'>
                    <div class='w-[60px] h-[60px]'><img src="icon1.png" alt="" /></div>
                    <div className='ml-2'>Send & receive</div>
                </div>
                <div class='flex flex-[20%] items-center m-[15px]'>
                    <div class='w-[60px] h-[60px]'><img src="icon2.png" alt="" /></div>
                    <div className='ml-2 '>Send & receive</div>
                </div>
                <div class='flex flex-[20%] items-center m-[15px]'>
                    <div  class='w-[60px] h-[60px]'><img src="icon3.png" alt="" /></div>
                    <div className='ml-2'>Send & receive</div>
                </div>
                <div class='flex flex-[20%] items-center m-[15px]'>
                    <div  class='w-[60px] h-[60px]'><img src="icon4.png" alt="" /></div>
                    <div className='ml-2'>Send & receive</div>
                </div>
            </div>


         <div class='flex flex-wrap  px-[7%] md:text-left  sm:text-center'>

            <div class='w-[100%] bg-yellow-300 rounded-[30px] px-[2%] py-[2%] text-white flex-1 m-[20px]'>
                <button class='w-[80px] mt-5 h-[40px] bg-black rounded-[20px]'>BASIC</button>
                <h1 class='my-2 mb-4 text-[40px] font-semibold'><span>$ </span> 100 USD</h1>
                <p class='my-2'>Lorem ipsum dolor sit amet, ametor
                    consectetur adipiscing elit. Et nibh.</p>
                <h1 class='mt-4 text-[20px] font-semibold'>Features</h1>
                <ol class='my-5'>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                </ol>
                <button class='md:w-[300px] sm:w-[200px] my-2 h-[60px] bg-black rounded-[25px]  text-[20px]'>contact us</button>
            </div>
            <div class='w-[100%] bg-yellow-300 rounded-[30px] px-[2%] py-[2%] text-white flex-1  m-[20px]'>
                <button class='w-[80px] mt-5 h-[40px] bg-black rounded-[20px]'>BASIC</button>
                <h1 class='my-2 text-[40px] font-semibold mb-4'><span>$ </span> 100 USD</h1>
                <p class='my-2'>Lorem ipsum dolor sit amet, ametor
                    consectetur adipiscing elit. Et nibh.</p>
                <h1 class='mt-4 text-[20px] font-semibold'>Features</h1>
                <ol class='my-5'>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                </ol>
                <button class='md:w-[300px] my-2 h-[60px] sm:w-[200px]  bg-black rounded-[25px]  text-[20px]'>contact us</button>
            </div>

            <div class='w-[100%] bg-yellow-300 rounded-[30px] px-[2%] py-[2%] text-white flex-1 justify-center m-[20px] '>
                <button class='w-[80px] mt-5 h-[40px] bg-black rounded-[20px]'>BASIC</button>
                <h1 class='my-1 text-[40px] font-semibold mb-4 '><span>$ </span> 100 USD</h1>
                <p class='my-2'>Lorem ipsum dolor sit amet, ametor
                    consectetur adipiscing elit. Et nibh.</p>
                <h1 class='mt-4 text-[20px] font-semibold'>Features</h1>
                <ol class='my-5'>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                    <li>lorem ipsum dolor sit amet</li>
                </ol>
                <button class='md:w-[300px] my-2 h-[60px] sm:w-[200px]  bg-black rounded-[25px] text-[20px]'>contact us</button>
            </div>
            </div>
            <Footer/>
        </>

    )
}

export default Pricing