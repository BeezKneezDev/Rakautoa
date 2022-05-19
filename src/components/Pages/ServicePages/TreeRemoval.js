import React, { useLayoutEffect} from "react";
import Hero from "../../Hero";
import Content from "../../Content";
import CallToAction from "../../CallToAction";
import Services from "../../Services";
import Expertise from "../../Expertise";
import Process from "../../Process";

const TreeRemoval = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
   });

  return (
    <div className="App">
        <Hero heading='Our Specialties' imageURL='images/image.jpg'/>
        <Content />
        <Process />
        <Expertise />
        <CallToAction />
        <Services />
    </div>
  )
}

export default TreeRemoval
