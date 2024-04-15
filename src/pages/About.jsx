import React from 'react'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
      <header class='flex justify-center mb-20 md:flex-row sm:flex-col'>
        <div>
          <h1 class='text-center md:text-[65px] sm:text-[30px] font-semibold text-yellow-400 mb-5'>About DK Group</h1>
          <div class='flex justify-center font-medium'>
            <p class='text-center md:w-[40%] sm:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Feugiat nulla suspendisse tortor aenean dis
              placerat. Scelerisque imperdiet vitae dolor non
              aliquam. Malesuada.</p>
          </div>

        </div>
      </header>


      <div class='flex md:px-20 md:flex-row sm:flex-col '>

        <p class='flex-1 font-semibold text-[45px] px-[3%]'>What drives Dk Group?</p>
        <div class='flex-1 justify-center mb-2'>

          <p class='w-[60%] px-[3%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Feugiat nulla suspendisse tortor aene.</p>
        </div>

      </div>



      <div class='flex md:px-20 text-white md:flex-row sm:flex-col'>


        <div class='bg-yellow-400 flex p-14 m-3  rounded-3xl'>
        
          <div class='mr-4 '><img class='w-[70px] h-[65px] min-w-[70px]' src="s-1.png" alt="" /> </div>

          <div>
            <h1>Open Source</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et nibh urna in proin dui purus
              bibendum cras. Morbi cursus nunc.</p>
          </div>
        </div>
        <box class='bg-yellow-400 flex  p-14 m-3  rounded-3xl'>
       
          <div class='mr-4 '>  <img class='w-[70px] h-[65px] min-w-[70px]' src="s-2.png" alt="" /></div>
          <div>
            <h1>Open Source</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et nibh urna in proin dui purus
              bibendum cras. Morbi cursus nunc.</p>
          </div>
        </box>
      </div>

      <div class='flex md:flex-row sm:flex-col md:px-20 text-white'>

        <box class='bg-yellow-400 flex  p-14 m-3  rounded-3xl'>
    
          <div class='mr-4 w-[130px] '>    <img class='w-[70px] h-[65px] min-w-[70px]' src="s-3.png" alt="" /> </div>
          <div>
            <h1>Open Source</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et nibh urna in proin dui purus
              bibendum cras. Morbi cursus nunc.</p>
          </div>
        </box>
        <box class='bg-yellow-400 flex p-14 m-3 rounded-3xl'>
       
          <div class='mr-4 '> <img class='w-[70px] h-[65px] min-w-[70px]' src="s-4.png" alt="" /> </div>
          <div>
            <h1>Open Source</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et nibh urna in proin dui purus
              bibendum cras. Morbi cursus nunc.</p>
          </div>
        </box>
      </div>


      <div class='flex mt-36 md:flex-row sm:flex-col'>

        <div class='flex-1 '>
          <div class=' ml-[14%] mb-[20px]'>   <h1 class='md:text-[60px] sm:text-[30px] :font-semibold'>Our missions</h1></div>

          <p class='ml-[14%]' >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Parturient lorem purus justo, ultricies.
            Sollicitudin odio elementum urna placerat lacus,
            vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent
            arcu tempus ullamcorper quisque in. Magna
            fermentum, lacus, fermentum arcu.<br /><br />


            Vulputate pellentesque proin facilisis dignissim
            gravida sed faucibus nunc. Nunc eget pharetra, in
            vitae porta lacus. Elit in nisl, in quis nulla tellus
            suscipit id. Semper velit odio cras pretium tristique
            habitant. Elit eu penatibus congue orci turpis. Enim
            diam id.</p>
        </div>
        <div class='flex-1 flex justify-end'>
          <img src="six.png" alt="" />
        </div>
      </div>






      <story class='flex md:flex-row sm:flex-col'>

        <one class='flex-1 p-[10%]'>
          <h1 class='text-[50px] font-semibold'>Our story</h1>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Parturient lorem purus justo, ultricies. Sollicitudin odio elementum
          urna placerat lacus, vulputate. Non malesuada viverra et ultrices
          cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu
          tempus ullamcorper quisque in. Magna fermentum, lacus,
          fermentum arcu.


          Vulputate pellentesque proin facilisis dignissim gravida sed
          faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl,
          in quis nulla tellus suscipit id. Semper velit odio cras pretium
          tristique habitant. Elit eu penatibus congue orci turpis.



          <h1 class='mt-44'>Timeline</h1>
          <p class='mt-14'>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in
            eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat.</p>
        </one>

        <div class='flex-1 md:p-[10%] sm:p-[3%] mt-44'>
          <div class='flex mt-7 items-center'> <div class='bg-black rounded-full w-4 h-4 inline-block mr-[10px]'></div>
            <h1 class='md:ml-3 text-[28px] font-bold '>Announcement</h1></div>
          <p class='mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mattis vivamus at mattis bibendum congue cras id
            interdum. Risus leo et.</p>
          <hr class="border-black" />



          <div class='flex mt-7 items-center'> <div class='bg-black rounded-full w-4 h-4 inline-block mr-[10px]'></div>
            <h1 class='md:ml-3 text-[28px] font-bold '>Announcement</h1></div>
          <p class='mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mattis vivamus at mattis bibendum congue cras id
            interdum. Risus leo et.</p>
          <hr class="border-black" />



          <div class='flex mt-7 items-center'> <div class='bg-black rounded-full w-4 h-4 inline-block mr-[10px]'></div>
            <h1 class='md:ml-3 text-[28px] font-bold'>Announcement</h1></div>
          <p class='mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mattis vivamus at mattis bibendum congue cras id
            interdum. Risus leo et.</p>
          <hr class="border-black" />


          <div class='flex mt-7 items-center'> <div class='bg-black rounded-full w-4 h-4 inline-block mr-[10px]'></div>
            <h1 class='md:ml-3 text-[28px] font-bold'>Announcement</h1></div>
          <p class='mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mattis vivamus at mattis bibendum congue cras id
            interdum. Risus leo et.</p>
          <hr class="border-black" />


          <div class='flex mt-7 items-center'> <div class='bg-black rounded-full w-4 h-4 inline-block mr-[10px]'></div>
            <h1 class='md:ml-3 text-[28px] font-bold'>Announcement</h1></div>
          <p class='mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mattis vivamus at mattis bibendum congue cras id
            interdum. Risus leo et.</p>
          <hr class="border-black" />
        </div>
      </story>
      <div class='flex md:px-[5%] md:flex-row sm:flex-col'><p class='flex-1 text-[35px] font-semibold'>Our Team</p><p class='flex-1 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Parturient lorem purus justo, ultricies.</p></div>

      <div class='flex md:px-7 flex-wrap'>

        <div class=' px-[2%]  bg-yellow-400 w-[full]  rounded-[35px] h-[full] m-[2%] '>
          <div class='flex justify-center align-middle '>
            <div class=' flex justify-center align-middle '>
              <img class='rounded-[35px] my-[50px]  min-w-[300px] w-[300px] h-[300px]  mt-[20px] ' src="man.avif" alt="" />
            </div>
          </div>
          <div class='text-center text-white'>Jhon</div>
          <div class='text-center text-white'>CEO & CO-Founder</div>
        </div>

        <div class=' bg-yellow-400 w-[full]  px-[2%] rounded-[35px] h-[full] m-[2%] '>
          <div class='flex justify-center align-middle '>
            <div class=' flex justify-center align-middle '>
              <img class='rounded-[35px] my-[50px]  min-w-[300px] w-[300px] h-[300px]  mt-[20px] ' src="man.avif" alt="" />
            </div>
          </div>
          <div class='text-center text-white'>Jhon</div>
          <div class='text-center text-white'>CEO & CO-Founder</div>
        </div>

        <div class=' bg-yellow-400 w-[full]   px-[2%] rounded-[35px] h-[full] m-[2%] '>
          <div class='flex justify-center align-middle '>
            <div class=' flex justify-center align-middle '>
              <img class='rounded-[35px] my-[50px]  min-w-[300px] w-[300px] h-[300px]  mt-[20px] ' src="man.avif" alt="" />
            </div>
          </div>
          <div class='text-center text-white'>Jhon</div>
          <div class='text-center text-white'>CEO & CO-Founder</div>
        </div>

      </div>
     

      <h1 class='text-center text-[30px] font-semibold my-[30px]'>Investors</h1>
      <p class='text-center font-semibold my-[30px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Parturient lorem purus justo, ultricies.</p>
      <div class='flex md:flex-row sm:flex-col sm:space-y-10 md:space-y-0 px-[5%] mb-[80px]'>
        <div class='flex-1'>
          <div class='flex '> <img   src="company1.png" alt="" />
            <span class='ml-4 text-[25px] font-semibold'>Company</span></div>
        </div>

        <div class='flex-1'>
          <div class='flex'> <img src="company2.png" alt="" />
            <span class='ml-4 text-[25px] font-semibold'>Company</span></div>
        </div>

        <div class='flex-1'>
          <div class='flex'> <img src="company3.png" alt="" />
            <span class='ml-4 text-[25px] font-semibold'>Company</span></div>
        </div>
        <div class='flex-1'>
          <div class='flex'> <img src="company4.png" alt="" />
            <span class='ml-4 text-[25px] font-semibold'>Company</span></div>
        </div>
        <div class='flex-1'>
          <div class='flex'> <img src="company5.png" alt="" />
            <span class='ml-4 text-[25px] font-semibold'>Company</span></div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default About