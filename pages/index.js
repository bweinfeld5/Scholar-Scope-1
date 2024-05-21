import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Scholar Scope!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
// pages/index.js

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
        <h1 className={styles.title}>Scholar Scope</h1>
        <CollegeLogos />
      </main>

      <Footer />
    </div>
  )
}
