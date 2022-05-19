import React from 'react'

const Hero = (props) => {

  return (
    <section 
        className='h-80 relative flex bg-image px-0' 
        style={{ backgroundImage: `url("images/backgrounds/hero.jpg")` }}
      >
        <div className='absolute min-h-full min-w-full bg-black bg-opacity-20'></div>
        <div className='container text-center m-auto z-10'>
          <h1 className='text-white font-bold text-5xl py-4'>{props.heading}</h1>
        </div>
    </section>
  )
}

export default Hero
