import React from 'react'


const Testimonials = () => {

  const reviews = [
    
      {
        "id": 1,
        "name": "Nathan Whitehead",
        "description": "I've found Emerson to be prompt and very professional. I have used RakauToa's services on may occasions in my role as a property manager. Prices and service are excellent.",
        "imageUrl": "/images/staff/2.jpg"
      },
      {
        "id": 2,
        "name": "Jacqui Brenton",
        "description": 'Amazing, Professional and Talented, The team had our whole garden sorted out for us including some big trees that needed cutting back and was very impressed by the quality, efficiency and friendliness.',
        "imageUrl": "images/staff/1.jpg"
      },
      {
        "id": 3,
        "name": "Steve & Nichola Haira",
        "description": "Very professional, healthy and safety conscious. Emerson and Shaun make a great team and very competitive in pricing. I would highly recommend RakauToa... Awesome work guys Thank you",
        "imageUrl": "/images/staff/2.jpg"
      },
    ]


  return (
    <section className='py-32'>
      <div className='container md:flex'>
        {reviews.map((review) => (
            <Testimonial review={review} />
        ))}
      </div>
    </section>
  )
}

const Testimonial = ({review}) => {
  const {name, description, imageUrl} = review;
  return (
    <div className='text-center px-5 py-5 basis-1/3'>
      <div className='flex justify-center'>
          <img className=' max-w-[120px] rounded-full shadow-lg shadow-slate-300' src={imageUrl} alt="" />
      </div>
      <div className='pt-4 pb-1 flex justify-center'>
          <img className=' w-12' src="images/quote.png" alt="" />
      </div>
      <div>
          <p>{description}</p>
      </div>
      <div>
          <h5 className=' text-orange-400 italic text-2xl font-normal brand-font'>{name}</h5>
      </div>
    </div>
  )
}

export default Testimonials
