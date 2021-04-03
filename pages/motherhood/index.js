import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import HorizontalImage from '../../components/HorizontalImage/HorizontalImage'
import VerticalFeature from '../../components/VerticalFeature/VerticalFeature'
import TwinVertical from '../../components/TwinVertical/TwinVertical'
import Footer from '../../components/Footer/Footer'

export default props => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header />
      <HorizontalImage image="/photo/tilda2.jpg" />
      <VerticalFeature
        image="/photo/tilda3.jpg"
        name="Tilda & Oscar"
        text="Tilda and Oscars pregnancy shoot was so much fun! They were expecting their beautiful son Thor. And to make the shoot about welcoming them as a new family, we went to their summer house outside of Stockholm. We went into the forests and to the beach to get some good scenery. Tilda and Oscar were amazing in front of the camera, they were like professional models! 
        We had a lot of fun while taking these pictures and I am so happy to have captured these special moments of them!"
      />
      <HorizontalImage image="/photo/tilda7.jpg" />
      <TwinVertical imageOne="/photo/tilda8.jpg" imageTwo="/photo/tilda9.jpg" />
      <HorizontalImage image="/photo/tilda5.jpg" />
      <HorizontalImage image="/photo/emilia4.jpg" />
      <TwinVertical
        imageOne="/photo/emilia3.jpg"
        imageTwo="/photo/emilia2.jpg"
      />
      <VerticalFeature
        image="/photo/emilia5.jpg"
        name="Emilia"
        title="testimonial"
        text="As I was two days away from reaching the estimated date of my birth Emelie suggested we did the photo shoot as soon as possible, we had decided Thursday but changed it to Tuesday and LUCKELIY we did because two days later my daughter was born!! 
        Emelie was so helpful and she always made sure that I was standing safe on my feet with that huge belly of mine. She managed to catch some really special moments still,  pushing the edges just a bit. 
        
        Emelie found a beautiful entrance to a garden where the sun was setting, Emelie saw it and yelled THERE, that’s perfect!! Hahaha, she always finds the perfect spots. 
        
        I had a bit of a hard time with how to move my hands in the photos but I got tips on movements and how to breathe to make it look as natural as possible, and I thought we succeeded very well!! She immortalized the memory of my daughter inside my womb in the most beautiful way she could have. THANK YOU!"
      />
      <HorizontalImage image="/photo/emilia7.jpg" />
      <Footer />
    </>
  )
}
