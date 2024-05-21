import Head from 'next/head'
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
      </main>
    </div>
  )
}
import Head from 'next/head'
import Header from '@components/Header'
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
      </main>
    </div>
  )
}

