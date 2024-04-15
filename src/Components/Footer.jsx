import React from 'react'

function Footer() {
    return (
        <div class=' h-auto pb-24 bg-black text-white pt-[40px] px-[10%] mt-[70px]'>
            <div class=' flex items-center '>
                <div class='flex-1'>   <img src="logo.png" alt="" /></div>

                <div class='flex-1  flex mb-14 justify-end '>
                    <img class='' src="social2.png" alt="" /> <img src="social1.png" alt="" />
                    <img src="social3.png" alt="" /></div>
            </div>
            <div class='flex md:space-x-36 mb-[80px] md:flex-row sm:flex-col'>


                <div class='flex-1 '>
                    <h1 class='mt-14 mb-6'>Menu</h1>
                    <hr />
                    <div class='flex mt-10'>
                        <div> </div>

                        <div class='flex-1 '>
                            <p class='mb-2 cursor-pointer'>Home</p>
                            <p class='mb-2 cursor-pointer'>About</p>
                            <p class='mb-2 cursor-pointer'>Pricing</p>
                        </div>
                        <div class='flex-1'>
                            <p class='mb-2 cursor-pointer'>Tokens</p>
                            <p class='mb-2 cursor-pointer'>Blog</p>
                            <p class='mb-2 cursor-pointer'>contact us</p>
                        </div>
                    </div>
                </div>

                <div class=' h-[full] rounded-2xl sm:mt-[100px] bg-slate-900 text-center pt-7 px-3 md:w-[400px] pb-[10px] '>
                    <h1 class='font-bold mb-3'>lorem ipsum sit ametero irseo</h1>
                    <p >Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris sed nulla integer</p>
                    <div class='flex '>
                        <button class='flex-1 h-[60px] bg-white text-black rounded-3xl mt-10 '>lorem ipsum</button>
                        <button class='flex-1 h-[60px] bg-white text-black rounded-3xl mt-10 ml-4'>lorem ipsum</button>
                    </div>
                </div>

            </div>

            <hr />
            <p class='mt-[20px]'>All rights reserved</p>
        </div>
    )
}

export default Footer