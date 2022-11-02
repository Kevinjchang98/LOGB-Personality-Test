'use client';

import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import DndList from './DndList';
import Scores from './Scores';
import FadeIn from 'react-fade-in';
import data from '../public/questions.json';

export default function Home() {
    const [scores, setScores] = useState<Array<Array<number>>>([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);

    const questions = data.map((q: Array<any>, i: number) => {
        return (
            <div key={i}>
                {/* <h2 key={i + 'heading'}>{i}</h2> */}
                <br />
                <DndList
                    key={i}
                    data={q}
                    setScores={setScores}
                    questionIndex={i}
                />
                <br />
            </div>
        );
    });

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>LOGB Personality Test</title>
                    <meta
                        name="description"
                        content="5-minute personality test"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <FadeIn delay={20}>
                        <h1 className={styles.titleCentered}>
                            LOGB Personality Test
                        </h1>
                        <p className={styles.mainCaption}>
                            Drag to reorder cards in each set of four to have
                            the most relatable card at the top and least
                            relatable card at the bottom
                        </p>
                        <div className={styles.dndContainer}>
                            <FadeIn delay={100}>{questions}</FadeIn>

                            <Scores scores={scores} />
                        </div>
                    </FadeIn>
                </main>
            </div>
        </>
    );
}
