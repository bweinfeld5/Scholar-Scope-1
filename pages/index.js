import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CollegeLogos from '@components/CollegeLogos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scholar Scope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.coverPage}>
        <Header title="Scholar Scope" />
        <CollegeLogos />
      </main>

      <Footer />
    </div>
  )
}


