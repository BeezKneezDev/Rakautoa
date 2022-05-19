import React from 'react'
import Navbar from './Navbar'
import PhoneNav from './PhoneNav'

const Header = () => {
  return (
    <header className=' p-5 flex flex-wrap py-8 items-center '>
        <div className='  basis-4/5 md:basis-[100%] md:text-center lg:basis-1/5 md:flex md:justify-center pb-5 lg:pb-0'>
          <img className=' max-w-[300px]' src="/images/logo.jpg"  alt="" />
        </div>
        <div className=' hidden md:block md:basis-[100%] lg:basis-3/5'>
          <Navbar classes=' flex'/>
        </div>
        <div className=' text-right	hidden lg:block lg:basis-1/5'>
          <a 
            href="/"
            className='py-4 px-24 hover:bg-orange-500 hover:text-white border-2 border-solid border-orange-500 rounded-full'
          >Get A Quote</a>
        </div>
        <div className=' text-right md:hidden basis-1/5'>
          <PhoneNav />
        </div>
    </header>
  )
}

export default Header
