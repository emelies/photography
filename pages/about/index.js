import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HorizontalImage from '../../components/HorizontalImage/HorizontalImage'
import VerticalFeature from '../../components/VerticalFeature/VerticalFeature'
import TextFeature from '../../components/TextFeature/TextFeature'

export default props => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Header />
      <HorizontalImage image="/photo/emelie2.jpg" />
      <TextFeature
        title="Do you want to create together?"
        textOne="Welcome to my site, I hope it makes you feel inspired. Inspired to create something. Maybe something that reflects you at a stage in your life right now? Maybe you want to represent your true self through an image? Maybe you need content for your new business? Or just feel like playing with shapes and colors, making art and embodying a feeling?

        I would love to create with you! Together we will explore how to visualize what you can imagine and beyond. 
        
        Co-creating together is my biggest passion and it is my intention to make you feel both seen and heard. To feel relaxed and playful. To experience the pure joy of creating together.
        
        Send me a message so we can have a free consultation to find out what your needs and desires are!"
        titleTwo="Say hello!"
        textTwo="emelie.sabel@gmail.com"
      />
      <VerticalFeature
        image="/photo/emelie1.jpg"
        title="Who am I?"
        text="A Swedish lass with highly visual mind. I have been expressing my visions through a lens since my early teens. Travel photography has been my main way since I have spent many years travelling and exploring the world. It has been a great way of learning because it includes all types of photography! 
        After years of learning, researching and exploring the wide world of photography, I have found myself loving shooting portraits. My favourite is the creatively unlimited and exploding in color kind of shoot!"
      />
      <Footer />
    </>
  )
}
