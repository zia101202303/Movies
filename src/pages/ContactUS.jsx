import React from 'react'
import Footer from '../Components/Footer'
import AccordionUsage from '../Components/Accordian'
function ContactUS() {
    return (
        <>
            <h1 class='text-[60px] font-semibold ml-[5%] mt-9'>Get in touch</h1>
            <form >
                <div class=' px-[5%]  flex   lg:flex-row md:flex-row sm:flex-col '>
                    <div class='lg:flex  flex-1  lg:space-x-10  mt-5 sm:flex-row '>
                        <div class='flex-1'>
                            <p class='font-bold mb-5'>Name</p>
                            <input class='bg-yellow-400 border-none placeholder-white mb-7 text-white rounded-[30px] w-[100%] h-[60px]' type="text" placeholder='Full Name' />
                            <div class='font-bold mb-5'>Email</div>
                            <input class='bg-yellow-400 border-none placeholder-white text-white rounded-[30px] w-[100%] h-[60px]' type="text" placeholder='example@gmail.com' />
                        </div>
                        <div class='flex-1'>
                            <div class='font-bold mb-5'>Company</div>
                            <input class='bg-yellow-400 border-none  mb-7 placeholder-white text-white rounded-[30px] w-[100%] h-[60px]' type="text" placeholder='Company Name' />
                            <div class='font-bold mb-5'>Subject</div>
                            <input class='bg-yellow-400 border-none focus:outline-none focus:border-red-500 placeholder-white text-white rounded-[30px] w-[100%] h-[60px]' type="text" placeholder='How can we help?' />
                        </div>


                    </div>

                    <div class='flex-[0.4] ml-[3%]  mt-0 sm:mt-[80px] md:mt-[0px]'>
                        <h1 class='font-semibold text-[23px]'>Want to reach us directly?</h1>
                        <p class='mt-5'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Id dui pharetra elementum sit
                            id sagittis non donec egestas.</p>
                        <div class='mt-5 flex'> <img src="./email.png" alt="" /> <p class='ml-4'>contact@example.com</p></div>
                        <div class='mt-5 flex'><img src="./email.png" alt="" /><p class='ml-4'>contact@example.com</p></div>
                        <div class='mt-5 flex'><img src="./email.png" alt="" /> <p class='ml-4'>contact@example.com</p></div>
                    </div>
                </div>
                <div class='my-7'><textarea class=" mx-[5%] h-32 w-[50%] border bg-yellow-400 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-500 placeholder-white" placeholder="Enter text here..."></textarea></div>
                <button class='bg-black text-white w-[160px] h-[60px] rounded-[30px] mx-[5%]'>Send Message</button>
            </form>


   <div class='text-center text-[50px] font-bold my-[60px]'><p>FAQ</p></div>
            <div class='flex justify-center '>
                <div class='w-[85%]'>
                <AccordionUsage/>
                </div>
           
            </div>

<Footer/>

        </>
    )
}

export default ContactUS



