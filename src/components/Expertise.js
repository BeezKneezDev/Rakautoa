import React from 'react'
import Heading from './Heading'


const Expertise = () => {
    const cards = [
        {
            "id": 1,
            "title": "Natural Fences",
            "postURL": "lawn-maintenance",
            "description": 'Your garden will look greener than ever with our 12-month garden maintenance program.',
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
          },
          {
            "id": 2,
            "title": "Natural Fences",
            "postURL": "natural-fences",
            "description": 'Both beautiful and functional, natural fences are a fragrant and attractive way of creating privacy.',
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
          },
          {
            "id": 3,
            "title": "Tree Planting",
            "postURL": "tree-planting",
            "description": "We'll recommend the most suitable shade, fruit and ornamental trees for your property.",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
          },
          {
            "id": 4,
            "title": "Tree Planting",
            "postURL": "tree-planting",
            "description": "We'll recommend the most suitable shade, fruit and ornamental trees for your property.",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
          },
        ]
  return (
    <section className='py-20 bg-gray-100'>
        <div className="container">
            <div className='text-center'>
                <Heading classes='text-gray-700' text='Why Choose Us' />
            </div>
            <div className='flex pt-3 pb-8'>
                <hr className='m-auto w-20 border-orange-500 border-2'/>
            </div>
            <div className='md:flex'>

              <div className=' basis-1/4 md:text-right'>
                  <Card className='md:flex md:justify-end' card={cards[0]} />
                  <Card className='md:flex md:justify-end' card={cards[1]} />
              </div>

              <div className=' hidden md:block basis-2/4 m-auto  '>
                <img src="images/why-us.png" alt="" />
              </div>

              <div className=' basis-1/4 ' >
                  <Card card={cards[0]}/>
                  <Card card={cards[1]}/>
              </div>

            </div>
            
        </div>
    </section>
  )
}

const Card = ({card, className = ''}) => {
  const {title, description, imageUrl, postURL} = card;
  return (
    <div  className='py-6 max-w-sm'>
      <div className={className}>
        <img className='bg-white block w-20 p-4 rounded-full shadow' src='/images/icon.png' />
      </div>
      <div className=' pt-4 px-2'>
        <h4 className=' text-gray-800 font-semibold text-xl'>{title}</h4>
        <p className='font-extralight text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Expertise
