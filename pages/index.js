import Head from 'next/head'
import HeroLeft from '../components/HeroLeft'
import SectionBox from '../components/SectionBox'
import SectionNew from '../components/SectionNew'
import SectionTeam from '../components/SectionTeam'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Lafisio | Home</title>
      <meta
        name="Lafisio - UFPI"
        content="Liga Acadêmica de Fisiologia - UFPI"
      />
      <meta name="description" content="Conheça a liga acadêmica de fisiologia da UFPI (Lafisio) e participe das nossas atividades, pesquisas e projetos de extensão!"></meta>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
    <main className={styles.mainContent}>
      <HeroLeft />
      <SectionNew />
      <SectionBox />
      <SectionTeam />
    </main>
    </>
  )
}
