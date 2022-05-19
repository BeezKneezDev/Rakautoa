import React from 'react'
import Heading from './Heading'
import Button from './Button'

const CallToAction = () => {
  return (
    <section 
            style={{ backgroundImage: `url("images/backgrounds/cta.jpg")` }}
            className=' bg-fixed bg-cover relative px-0'
        >
        <div className='absolute min-h-full min-w-full bg-black bg-opacity-20'></div>
        <div className="container text-center py-32 relative z-10">
            <div>
                <Heading classes='text-white' text='Let us care for your garden!' />
            </div>
            <div>
                <h5 className='text-white'>Call us at 555 555-5555 or contact us for your free quote.</h5>
            </div>
            <div className='pt-10'>
                <Button 
                    text='Contact Us'
                    url='/contact' 
                />
            </div>
        </div>
    </section>
  )
}

export default CallToAction
