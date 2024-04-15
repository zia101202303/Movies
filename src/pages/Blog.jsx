import React from 'react'
import Post from './Post'
import Footer from '../Components/Footer'
function Blog() {
    return (
        <>
            <div class='flex px-[8%] sm:flex-col md:flex-row my-[40px]'>
                <div class='flex-1  text-[50px] font-bold mb-[30px]'>
                    <p>Blog</p>
                </div>
                <div class='flex-1 '>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                        nulla suspendisse tortor aenean dis placerat.</p>
                </div>
            </div>


            <div class='flex md:flex-wrap px-[8%]'>
                <div class='flex-1 bg-yellow-400 text-white px-[4%] rounded-l-[30px] '>
                    <button class='w-[95px]   h-[37px] bg-black text-white rounded-[20px] mt-[45px]'>Featured</button>
                    <p class='font-semibold mt-[15px] mb-6 text-[30px]'>Lorem ipsum dolor sit ametero
                        irseo, consectetur adipiscing elit.
                    </p>
                    <p class='mb-14 text-[18px]'>Lorem ipsum dolor sit ametero irseo, consectetur
                        adipiscing elit. Scelerisque viverra donec diammeo.</p>
                </div>
                <div class='flex-1 bg-orange-400 rounded-r-[30px]'>

                </div>
            </div>


            <div class='flex md:flex-row sm:flex-col px-[8%] mt-[70px]'>
                <div class='flex-1 text-[40px] font-semibold'>Latest Posts</div>
                <div class='flex-1 flex  md:justify-end sm:justify-start mt-[30px] '>
                    <button class='text-white bg-black w-[65px] h-[34px] rounded-[20px] mx-[2%]'>All</button>
                    <button class='text-white bg-black w-[75px] h-[34px] rounded-[20px] mx-[2%]'>Apps</button>
                    <button class='text-white bg-black w-[90px] h-[34px] rounded-[20px] mx-[2%]'>Products</button>
                    <button class='text-white bg-black w-[85px] h-[34px] rounded-[20px] mx-[2%]'>Tutorial</button>
                </div>
            </div>






            <div class='flex flex-wrap justify-center space-x-7 mt-[20px]'>
                <div class='w-[360px] min-w-[280px]  mt-7 '>
                    <div class='h-[200px] bg-yellow-100 rounded-t-3xl'>image</div>
                    <div class='h-[370px] bg-yellow-400 rounded-b-3xl pt-10 pl-10 pr-10 '>
                        <p class='text-2xl font-bold'>The Basics about investment</p>
                        <p class='pt-10 font-semibold mb-12'>Lorem ipsum dolor sit ametero irseo,consectetur adipiscing elit. Scelerisque
                            viverra donec diammeo</p>
                        <hr />
                        <div class='flex'>
                            <div class='mt-8'><img class='w-12 rounded-full h-12' src="man.avif" alt="" /></div>
                            <div class='mt-8 ml-8'><h1 >Alex Turner</h1>
                                <p>feb 23, 2024</p></div>
                        </div>
                    </div>
                    <div class="translate-y-[-380px] translate-x-[30px] w-24 h-7 bg-black rounded-2xl"></div>
                </div>
                <div class='w-[360px] min-w-[280px]  mt-7   '>
                    <div class='h-[200px] bg-yellow-100 rounded-t-3xl'>image</div>
                    <div class='h-[370px] bg-yellow-400 rounded-b-3xl pt-10 pl-10 pr-10 '>
                        <p class='text-2xl font-bold'>The Basics about investment</p>
                        <p class='pt-10 font-semibold mb-12'>Lorem ipsum dolor sit ametero irseo,consectetur adipiscing elit. Scelerisque
                            viverra donec diammeo</p>
                        <hr />
                        <div class='flex'>
                            <div class='mt-8'><img class='w-12 rounded-full h-12' src="man.avif" alt="" /></div>
                            <div class='mt-8 ml-8'><h1 >Alex Turner</h1>
                                <p>feb 23, 2024</p></div>
                        </div>
                    </div>
                    <div class="translate-y-[-380px] translate-x-[30px] w-24 h-7 bg-black rounded-2xl"></div>
                </div>
                <div class='w-[360px] min-w-[280px]   mt-7   '>
                    <div class='h-[200px] bg-yellow-100 rounded-t-3xl'>image</div>
                    <div class='h-[370px] bg-yellow-400 rounded-b-3xl pt-10 pl-10 pr-10 '>
                        <p class='text-2xl font-bold'>The Basics about investment</p>
                        <p class='pt-10 font-semibold mb-12'>Lorem ipsum dolor sit ametero irseo,consectetur adipiscing elit. Scelerisque
                            viverra donec diammeo</p>
                        <hr />
                        <div class='flex'>
                            <div class='mt-8'><img class='w-12 rounded-full h-12' src="man.avif" alt="" /></div>
                            <div class='mt-8 ml-8'><h1 >Alex Turner</h1>
                                <p>feb 23, 2024</p></div>
                        </div>
                    </div>
                    <div class="translate-y-[-380px] translate-x-[30px] w-24 h-7 bg-black rounded-2xl"></div>
                </div>
            </div>

           
<Post/>
<Footer/>


        </>
    )
}

export default Blog