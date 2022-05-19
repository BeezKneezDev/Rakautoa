import React, { useLayoutEffect} from "react";
import CallToAction from '../CallToAction'
import Testimonials from '../Testimonials'
import Hero from '../Hero'
import Content from "../Content";

const WorkPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const content = {
    "title": "With Us the Grass is Always Greener",
    "body": "<p>Rakau Toa - Tree Specialists was founded by owner operators, husband and wife team Emerson and Katrina Kopae in 2017. Rakau Toa provides a range of arborist services to both domestic and commercial clients, including emergency work.</p><p>Passionate about everything to do with trees, Emerson became a fully qualified arborist in 2009 and has worked in the tree industry for over 20 years with experience in diverse environments from bush felling, pruning and felling to contract work. With 20 years of teaching behind her Katrina is now fully devoted to the business management of Rakau Toa.</p>",
    "imageURL": "images/staff/about2.jpg",
    "btntxt": "Contact Us",
    "btnURL": "/contact",
  }

  return (
    <div className="App">
        <Hero heading='Latest Work'/>
        <Content content={content}/>
        <div className="flex flex-wrap">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        <Testimonials />
    </div>
  )
}

const Project = () => {

  return (
    
    <div  className=' relative basis-1/2 h-[30rem] text-center flex flex-col bg-image'
      style={{ backgroundImage: `url("images/image.jpg")` }}>
      <div className='absolute min-h-full min-w-full bg-black bg-opacity-20'></div>
      <div className='mt-auto z-10 pb-5'>
          <h3 className='text-white'>Name</h3>
          <h4 className='text-orange-500 text-2xl font-light italic brand-font'>Since 1998</h4>
      </div>
    </div> 
    
  )
}



export default WorkPage
