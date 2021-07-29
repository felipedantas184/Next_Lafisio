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
      <title>Contato Lafisio</title>
      <meta name="keywords" content="Contato, Lafisio" />
      <meta name="description" content="LAFISIO CONTATO. Liga Acadêmica de Fisiologia da UFPI. Entre em contato com a Lafisio por meio das nossas redes sociais!"></meta>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
    <main>
      <Contact />
      <SideBar />
    </main>
    </>
  )
}
