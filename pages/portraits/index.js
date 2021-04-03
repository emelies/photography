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
      <HorizontalImage image="/photo/mimmi4.jpg" />
      <VerticalFeature
        image="/photo/mimmi5.jpg"
        name="Mimmi"
        title="Testimonial"
        text="Being photographed by Emelie is always such a fun and empowering experience. She gives great continuous feedback throughout the shoots and most importantly so much encouragement and hype! I’m always confident the pictures will come out great, she knows how to instruct you to make everything look great and works so well with the light, the angles, and the environment. She will even help you pick out outfits and accessories if you like.
        A very skilled photographer who really knows how to make you look and feel your absolute best!"
      />
      <TwinVertical imageOne="/photo/mimmi1.jpg" imageTwo="/photo/mimmi2.jpg" />
      <HorizontalImage image="/photo/nina2.jpg" />
      <VerticalFeature
        image="/photo/nina3.jpg"
        name="Nina"
        title="Testimonial"
        text="Emelie is a highly talented photographer and working with her was an amazing experience that exceeded my expectations. I hired her for a photo shoot for my website and didn’t really have a clear idea of what I wanted prior to working with her. She asked all the right questions and helped me gain clarity on the look and feel of the photoshoot and most importantly she made me feel very comfortable in front of the camera, which I thought would be an impossible task! I’ve always been awkward on camera and not particularly photogenic, so I was amazed at how natural it felt to work with her and that she was able to capture so many amazing shots in such a short amount of time, I had a great variety of pictures to choose from. She had a lot of creative ideas and the photoshoot was both fun and playful. I wouldn’t hesitate to recommend her to others. I’m more than happy with the final results and I really look forward to working with her again in the future. Thank you Emelie!"
      />
      <TwinVertical imageOne="/photo/nina1.jpg" imageTwo="/photo/nina4.jpg" />
      <Footer />
    </>
  )
}
