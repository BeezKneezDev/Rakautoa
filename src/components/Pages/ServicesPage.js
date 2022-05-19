import React, { useLayoutEffect} from "react";
import CallToAction from '../CallToAction'
import Testimonials from '../Testimonials'
import Hero from '../Hero'
import Services from "../Services";

const TreeRemoval = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="App">
        <Hero heading='Services' imageURL='images/image.jpg'/>
        <Services />
        <CallToAction />
        <Testimonials />
    </div>
  )
}

export default TreeRemoval
