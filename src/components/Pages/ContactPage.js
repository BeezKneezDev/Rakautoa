import React, { useLayoutEffect} from "react";
import Heading from "../Heading";
import Hero from '../Hero'

const ContactPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="App">
        <Hero heading='Contact Us' imageURL='images/image.jpg'/>
        <section className='py-20 max-w-4xl m-auto'>
          <div className="container">
              <div className='text-center'>
                  <Heading classes='text-gray-700' text='Get a Free Quote' />
              </div>
              <div className="text-center">
                <p>Get the lawn or garden of your dreams. It’s easier than you think! Contact us today and we’ll beautify your home or commercial property.  Call us at  555 555-5555  or send us a message using the form below and we’ll get back to you as soon as we can.</p>
              </div>
              <div className="py-5">
                <form action="">
                 <div className="flex space-x-5">
                  <div className="py-2 basis-1/2">
                      <label className=" w-full" htmlFor="name">Name</label>
                      <input className=" w-full border-green-500 border-b-2" type="text" name="name" id="name" />
                    </div>
                    <div className="py-2 basis-1/2">
                      <label className=" w-full" htmlFor="phone">Phone</label>
                      <input className=" w-full border-green-500 border-b-2" type="text" name="phone" id="phone" />
                    </div>
                 </div>
                  <div className="py-2">
                    <label className=" w-full" htmlFor="email">Email</label>
                    <input className=" w-full border-green-500 border-b-2" type="text" name="email" id="email"/>
                  </div>
                  <div className="py-2">
                    <label className=" w-full" htmlFor="message">Message</label>
                    <textarea className=" w-full border-green-500 border-b-2" name="message" id="message" cols="" rows="5"></textarea>
                  </div>
                </form>
              </div>
              
          </div>
        </section>
    </div>
  )
}

export default ContactPage
