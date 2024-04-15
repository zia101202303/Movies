import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carosel'
import SmallCarosel from '../Components/SmallCarosel'

function Home() {
  return (
    <>
     



      <div class="h-600 bg-cover bg-center flex " style={{ backgroundImage: "url('banner.png') ", height: '520px' }}>
        <div class=' mt-32 ml-20'><div class='w-[100%]'>
          <h1 class='md:text-6xl sm:text-5xl font-bold mb-4'>INVEST YOUR</h1>
          <h1 class='md:text-8xl sm:text-5xl font-bold mb-3'>MONEY!</h1>
          <p class='w-[100%] mb-6'>JOIN OUR CUMMUNITY OF INVESTORS TODAY AND TAKE CONTROL OF YOUR  FINANCIAL FUTURE WITH DK GROUP</p>
        </div>
          <button class='bg-black text-white h-10 w-40 rounded-3xl '>VIEW OUR PLANS&gt;</button></div>
      
      </div>
      
      <img src="two.png" alt="" />
      <img src="three.png" alt="" />
      <Carousel/>
      <img src="four.png" alt="" />
      <img src="five.png" alt="" />


      <div class='bg-yellow-400 w-full h-[100%] py-24 flex sm:flex-col  lg:flex-row space-x-2 justify-center px-[2%]'>
        <div class=' w-[100%] sm:order-2 lg:order-1 flex-[50%]'>
          <h1 class='mb-4 font-bold text-4xl'>Earn daily rewards on
            your idle tokens</h1>
          <p class='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat nulla suspendisse tortor aene.</p>
          <div class='flex mb-4'><img src="con1.png" alt="" /><span>Lowest fees in market</span></div>
          <div class='flex mb-4'><img src="con2.png" alt="" /><span>Fast and secure transactions</span></div>
          <div class='flex mb-4'><img src="con3.png" alt="" /><span>256-bit secure encryption</span></div>
        </div>
        <div class='sm:order-1 lg:order-2 flex-[50%] sm:mt-[20px]  ' >
          <div ><iframe  class='rounded-2xl md:w-[540px] md:h-[286px] sm:w-[300px] sm:h-[200px] '  src="https://www.youtube.com/embed/kC4nwNX9MPE" title="Don&#39;t come to USA if.. Things to know about reality here" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>
      </div>


<div class='flex my-[50px] mx-[10%]  font-semibold'><p class='flex-1 text-[40px]'>What our users say?</p>
<div class='flex-1 flex justify-end'><button class=' bg-black text-white rounded-[100px] w-[120px] h-[50px]'>Button of</button></div>
</div>
      <SmallCarosel/>
      <div class=' w-full h-[100%] py-24 flex sm:flex-col  lg:flex-row space-x-2 justify-center px-[2%]'>
        <div class=' w-[100%] sm:order-2 lg:order-1 flex-[50%]'>
          <h1 class='mb-4 font-bold text-4xl'>Earn daily rewards on
            your idle tokens</h1>
          <p class='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat nulla suspendisse tortor aene.</p>
          <div class='flex mb-4 space-x-3 '><img  src="con1.png" alt="" /><span>Lowest fees in market</span></div>
          <div class='flex mb-4 space-x-3'><img src="con2.png" alt="" /><span>Fast and secure transactions</span></div>
          <div class='flex mb-4 space-x-3'><img src="con3.png" alt="" /><span>256-bit secure encryption</span></div>
        </div>
        <div class='sm:order-1 lg:order-2 flex-[50%] sm:mt-[20px]  ' >
          <div ><iframe  class='rounded-2xl md:w-[540px] md:h-[286px] sm:w-[300px] sm:h-[200px] '  src="https://www.youtube.com/embed/kC4nwNX9MPE" title="Don&#39;t come to USA if.. Things to know about reality here" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>
      </div>

      <div class='flex lg:flex-row sm:flex-col md:space-x-6 px-10'>
      <div class='flex-[33.33%]  mt-7   '>
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
      <div class='flex-[33.33%]  mt-7   '>
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
      <div class='flex-[33.33%]  mt-7   '>
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

      <div class='flex justify-center mb-11'><button class='w-44 h-12 rounded-3xl bg-yellow-100'>View All Articles</button></div>

     <Footer/>
    </>

  )
}

export default Home