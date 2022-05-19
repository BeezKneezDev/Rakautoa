import React from 'react'
import Heading from './Heading'

const Team = () => {

  const profiles = [
    {
      "id": 1,
      "name": "Emerson Kopae",
      "role": 'Owner',
      "imageUrl": "images/staff/profile1.jpg"
    },
    {
      "id": 2,
      "name": "Katrina Kopae",
      "role": 'Admin',
      "imageUrl": "images/staff/profile2.jpg"
    },
    {
      "id": 3,
      "name": "Unknown",
      "role": 'Second Hands',
      "imageUrl": "images/staff/profile3.jpg"
    },
  ]

  return (
    <section className='py-20 '>
        <div className="container">
            <div className='text-center'>
                <Heading classes='text-gray-700' text='Meet The Team' />
            </div>

            <div className='md:flex justify-between space-x-4'>
                {profiles.map((profile) => (
                  <Profile profile={profile}/>
                ))}
            </div>
            
        </div>
    </section>
    
  )
}

const Profile = ({profile}) => {
  const {name, role, imageUrl} = profile;
    return (
      <div  className=' relative basis-1/3 h-[500px] text-center flex flex-col bg-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='absolute min-h-full min-w-full bg-black bg-opacity-10'></div>
        <div className='mt-auto z-10 pb-5'>
            <h3 className='text-white'>{name}</h3>
            <h4 className='text-orange-500 text-2xl font-light italic brand-font'>{role}</h4>
        </div>
      </div>
    )
  }

export default Team
