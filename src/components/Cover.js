import React from 'react'
import Button from './Button'

const Cover = () => {
  return (
    <section 
        className='min-h-screen relative flex bg-image px-0' 
        style={{ backgroundImage: `url("images/cover.jpg")` }}
      >
        <div className='absolute min-h-full min-w-full bg-black bg-opacity-20'></div>
        <div className='container text-center m-auto z-10'>
          <h4 className='text-orange-500 text-2xl text font-medium italic brand-font'>20+ years Experience</h4>
          <h1 className='text-white font-bold text-6xl leading-[1.1] py-4'>No job too high or too small We will climb the heights most people won't</h1>
          <h5 className='text-white pb-10 text-xl'>Family-run Tree Removal Specialtlists for your home or business</h5>
          <Button text='Contact Us' url='/contact' />
        </div>
        <div className='absolute bottom-0'> 
          <img 
            className='' 
            alt='backgound' 
            src='images/background.png'
          />
        </div>
    </section>
  )
}

export default Cover
