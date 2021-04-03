import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroHeader from '../components/HeroHeader/HeroHeader'
import HeroImage from '../components/HeroImage/HeroImage'
import HeroFooter from '../components/HeroFooter/HeroFooter'
import VerticalFeature from '../components/VerticalFeature/VerticalFeature'
import Footer from '../components/Footer/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeroHeader />
      <Carousel
        infiniteLoop
        autoPlay
        useKeyboardArrows
        showStatus={false}
        showThumbs={false}
        onClickNext={true}
        onClickPrev={true}
        showArrows={false}
      >
        <div className="">
          <img src="/photo/neon1.jpg" />
        </div>
        <div>
          <img src="/photo/tilda2.jpg" />
        </div>
        <div>
          <img src="/photo/mimmi4.jpg" />
        </div>
      </Carousel>
      <HeroFooter />
    </div>
  )
}
