import Head from 'next/head';
import { LoginButton } from '../components/LoginButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Hasya</title>
      </Head>

      <main className={styles.contentContainer}>
        <LoginButton />
      </main>
    </>
  )
}
