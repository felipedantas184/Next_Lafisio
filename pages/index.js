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
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
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
