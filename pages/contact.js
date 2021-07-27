import Head from 'next/head'
import Contact from '../components/Contact'
import HeroLeft from '../components/HeroLeft'
import Perks from '../components/Perks'
import Services from '../components/Services'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="contact" />
    </Head>
    <Contact />
    <SideBar />
    </>
  )
}
