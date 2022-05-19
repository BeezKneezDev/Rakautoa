import React from 'react'
import Button from './Button'
import Heading from './Heading'

const Services = () => {

  const services = [
    {
        "id": 1,
        "title": "Tree Removal",
        "postURL": "tree-removal",
        "description": 'Let the sunsine through by removing overgrown or hazardous trees today and regain your land.',
        "imageUrl": "https://images.pixieset.com/88757312/d3171bfaec22bf8f174212e1e3fd7ac2-xlarge.jpg"
      },
      {
        "id": 2,
        "title": "Tree Pruning and Shaping",
        "postURL": "tree-pruning-and-shaping",
        "description": 'Both beautiful and functional, natural fences are a fragrant and attractive way of creating privacy.',
        "imageUrl": "https://images.pixieset.com/88757312/77d1d09fd2531d4ab74237548bdb946b-xlarge.jpg"
      },
      {
        "id": 3,
        "title": "Side Trimming and Topping",
        "postURL": "side-trimming-and-topping",
        "description": "We'll recommend the most suitable shade, fruit and ornamental trees for your property.",
        "imageUrl": "https://images.pixieset.com/88757312/4571462553b0a34c7b2605fc1f021664-xlarge.jpg"
      },
      {
        "id": 4,
        "title": "Section Clearing",
        "postURL": "section-clearing",
        "description": 'Your garden will look greener than ever with our 12-month garden maintenance program.',
        "imageUrl": "https://images.pixieset.com/88757312/d3171bfaec22bf8f174212e1e3fd7ac2-xlarge.jpg"
      },
      {
        "id": 5,
        "title": "Lifestyle and Farms",
        "postURL": "lifestyle-and-farms",
        "description": 'Both beautiful and functional, natural fences are a fragrant and attractive way of creating privacy.',
        "imageUrl": "https://images.pixieset.com/88757312/77d1d09fd2531d4ab74237548bdb946b-xlarge.jpg"
      },
      {
        "id": 6,
        "title": "Line Clearning",
        "postURL": "line-clearning",
        "description": "We'll recommend the most suitable shade, fruit and ornamental trees for your property.",
        "imageUrl": "https://images.pixieset.com/88757312/4571462553b0a34c7b2605fc1f021664-xlarge.jpg"
      },
      {
        "id": 7,
        "title": "Hedges",
        "postURL": "hedges",
        "description": 'Your garden will look greener than ever with our 12-month garden maintenance program.',
        "imageUrl": "https://images.pixieset.com/88757312/d3171bfaec22bf8f174212e1e3fd7ac2-xlarge.jpg"
      },
      {
        "id": 8,
        "title": "Mulch and Firewood",
        "postURL": "mulch-and-firewood",
        "description": 'Both beautiful and functional, natural fences are a fragrant and attractive way of creating privacy.',
        "imageUrl": "https://images.pixieset.com/88757312/77d1d09fd2531d4ab74237548bdb946b-xlarge.jpg"
      },
      {
        "id": 9,
        "title": "Stump Grinding",
        "postURL": "stump-grinding",
        "description": "We'll recommend the most suitable shade, fruit and ornamental trees for your property.",
        "imageUrl": "https://images.pixieset.com/88757312/4571462553b0a34c7b2605fc1f021664-xlarge.jpg"
      },
  ];
  return (
    <section className='py-20'>
        <div className="container">
            <div className='text-center'>
                <Heading classes='text-gray-700' text='Our Specialties' />
            </div>
            <div className='flex pt-3 pb-8'>
                <hr className='m-auto w-20 border-orange-500 border-2'/>
            </div>
            <div className='flex flex-wrap justify-between'>
            {services.map((service) => (
                <Tile service={service}/>
            ))}

            </div>
            <div className='text-center pt-10'>
                <Button text='View All Services'  url='/services'/>
            </div>
        </div>
    </section>
  )
}

const Tile = ({service}) => {
  const {title, description, imageUrl, postURL} = service;
  return (
    <a className='md:basis-[32%] my-4' href={postURL}>
        <div 
            className='bg-image h-80 lg:h-72'
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className='text-center pt-4 px-2'>
            <h4 className=' text-gray-800 font-semibold text-xl'>{title}</h4>
            <p className='font-extralight text-sm'>{description}</p>
        </div>
    </a>
  )
}

export default Services
