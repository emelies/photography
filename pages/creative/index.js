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

      <HorizontalImage image="/photo/neon1.jpg" />
      <VerticalFeature
        image="/photo/neon2.jpg"
        name="Neon Subway"
        text="A creative project in the subways of Stockholm. Dressed up with makeup and neon hair, we wanted to express the feeling of alienation in a city where everyone dresses the same and walks at the same pace. In this shoot, we explored how to blend into the background as well as sticking out with vibrant colors. Playing with light and color!  

        As always I love drawing on the images with a neon pen and really highlighting movement and features to lift the feeling and the vibe even more!"
      />
      <HorizontalImage image="/photo/neon8.jpg" />
      <TwinVertical imageOne="/photo/neon4.jpg" imageTwo="/photo/neon9.jpg" />
      <HorizontalImage image="/photo/emelie.jpg" />
      <VerticalFeature
        image="/photo/emelie5.jpg"
        name="Self portraits"
        text="Traditionally photographers are always behind the camera. But recently, I have been very inspired by other photographers to be both behind and in front of the lens. This was a lot of fun and took a lot longer than in regular shoots. I also found my love of painting in my photos through these shoots. And I soooo look forward to continuing this was of reflecting myself.
        Most of these photos I took on my last trip to Bali."
      />

      <TwinVertical
        imageOne="/photo/emelie3.jpg"
        imageTwo="/photo/emelie4.jpg"
      />
      <Footer />
    </>
  )
}
