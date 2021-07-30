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
      <title>Lafisio UFPI | Home</title>
      <meta
        name="Lafisio - UFPI"
        content="Liga Acadêmica de Fisiologia - UFPI"
      />
      <meta name="description" content="LAFISIO. Liga Acadêmica de Fisiologia da UFPI. Conheça a LAFISIO UFPI e participe das nossas atividades, pesquisas e projetos de extensão!" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="google-site-verification" content="CsqYewy3QltK0Z6AxOJW6bgPsLVfHUj3BNXFKl43V-Q" />
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
