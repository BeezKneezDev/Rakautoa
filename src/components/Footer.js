import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Icons from './Icons'

const Footer = () => {
  return (
    <section 
        className='relative flex bg-image px-0 ' 
        style={{ backgroundImage: `url("images/backgrounds/footer.jpg")` }}
      >
        <div className='absolute top-0'> 
          <img 
            className=' relative z-10' 
            alt='backgound' 
            src='images/bg-image.png'
          />
        </div>
        <div className='absolute min-h-full min-w-full bg-black bg-opacity-60'></div>
        <div className='container m-auto z-10 pt-40 lg:pt-72 pb-20 px-5 md:flex justify-between'>
          <div>
              <div className='footer-nav pb-10'>
                <Navbar classes='flex-col'/>
              </div>
          </div>
          <div className=' text-white'>
              <div className='pb-2'>
                <h6 className=' font-bold'>Contact</h6>
              </div>
              <div className='py-2'>
                <h6>027 534 8210</h6>
                <h6>katrina@rakautoatrees.co.nz</h6>
              </div>
              <div>
                <h6>37 Discovery Drive</h6>
                <h6>Flagstaff, Hamilton 3210</h6>
              </div>
          </div>
          <div className='py-10 md:py-0'>
            <div className='py-5'>
                <Button className='px-20' text='Get a Quote' />
            </div>
            <div className='flex justify-around pt-2'>
                <Icons />
                <Icons />
                <Icons />
                <Icons />
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Footer
