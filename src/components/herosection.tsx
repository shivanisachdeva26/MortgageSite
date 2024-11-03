import React from 'react'
import ImageSwitcher from './stories';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <>
    <div className=
    // 'h-auto md:h-[40rem] lg:h-[50rem] mx-auto  py-50 md:py-5
    'w-full flex flex-col items-center justify-center  bg-green-900 relative firstdiv' >
      <div className='p-4 w-full text-center font-lightbold text-8xl text-green-500 top-14'>
        <h1 className=' z-2 absolute mx-72' >Mortgages made simple</h1>
      
        <Image src="https://media.better.com/better-com/homepage/hero-variant-c.webp" alt='' className=' z-1 phoneimg' width={500} height={100} />
        </div>
    </div>
    <div className='flex mb-14'>
    <div>
    <ImageSwitcher />
    </div>
    <div className='mx-28'>
      <h1 className='font-semibold text-8xl my-10'>Find out why we're better.</h1>
      <button className='yes-continue '>See all our stories</button>
    </div>
    </div>
     {/* Footer Section */}
     <div className="footer-section flex justify-between ">
              <div className='flex flex-col text-left'>
                <p className='font-semibold text-3xl '>Want to continue with your pre-approval?</p>
                <p className='font-medium text-xl mt-2 '>You’ll be able to pick up right where you left off.</p>
                </div>
                <div className="footer-buttons">
                    <button className="not-right-now m-1 mx-2">Not right now</button>
                    <button className="yes-continue m-1 mx-2 ">Yes, continue</button>
                </div>
            </div>
        
    </>
  )
}

export default HeroSection;