import Head from 'next/head';

import { CompleteChallenges } from "../componentes/CompleteChallenges";
import { Countdown } from "../componentes/Countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { ChallengeBox } from "../componentes/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownnContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.on</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
