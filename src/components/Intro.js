import React from 'react'
import Heading from './Heading'
import Button from './Button'

const Intro = () => {
  return (
    <section className=''>
        <div className='container py-32 flex flex-col md:flex-row-reverse'>
            
            <div className='basis-3/3 md:basis-1/2 pb-10 md:pb-0 bg-image'
                 style={{ backgroundImage: `url("images/image.jpg")` }}
            >
                
            </div>
            
            <div className='md:basis-1/2 pr-10'>
                {/* <div>
                    <hr className='w-20 border-orange-500 border-2'/>
                </div> */}
                <div>
                    <h4 className='text-orange-500 text-2xl font-medium italic brand-font'>Since 1998</h4>
                </div>
                <div>
                    <p>GardenCare lawn care services is one of the most well-respected landscapers in the Clifton area, with hundreds of residential and professional clients. We are a family-run business and we care deeply about what we do. </p>
                    <p>Founded in 1998 by Steven and Michelle Surrey, we are dedicated to providing the highest level of service at competitive prices. Your pride is our greatest satisfaction!</p>
                </div>
                <div className='pt-10'>
                    <Button text="Read More" />
                </div>
            </div>

            

        </div>
    </section>
  )
}

export default Intro
