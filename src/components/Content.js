import React from 'react'
import Heading from './Heading'
import Button from './Button'

const Content = ({className = '', content}) => {
    const {title, body, imageURL, btnURL, btntxt} = content;
  return (
    <section className={className}>
        <div className='container py-32 flex flex-col md:flex-row-reverse'>
            
            <div className='basis-3/3 md:basis-[40%] pb-10 md:pb-0'>
                <img 
                    src={imageURL}
                    className=' rounded-full shadow-lg shadow-slate-300' 
                    alt='' 
                />
            </div>
            
            <div className='md:basis-[60%] pr-10'>
                <div>
                    <hr className='w-20 border-orange-500 border-2'/>
                </div>
                <div>
                    <Heading text={title} />
                </div>
                <div dangerouslySetInnerHTML={{__html: body}}>
                
                </div>
                <div className='pt-10'>
                    <Button text={btntxt} url='/about' />
                </div>
            </div>

            

        </div>
    </section>
  )
}

export default Content
