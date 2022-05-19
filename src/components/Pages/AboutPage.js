import React, { useLayoutEffect} from "react";
import Content from '../Content'
import CallToAction from '../CallToAction'
import Hero from '../Hero'
import Expertise from '../Expertise'
import Team from '../Team'



const AboutPage = () => {

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
        <Hero heading='About Us' imageURL='images/image.jpg'/>
        <Content className='' content={content}/>
        <Expertise />
        <CallToAction />
        <Team />
    </div>
  )
}

export default AboutPage
