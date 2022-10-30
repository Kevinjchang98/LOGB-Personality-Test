import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import DndList from './DndList';
import Scores from './Scores';
import FadeIn from 'react-fade-in';

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

    const data = [
        [
            {
                description: 'Likes authority',
                category: 'L',
            },
            {
                description: 'Enthusiastic',
                category: 'O',
            },
            {
                description: 'Sensitive feelings',
                category: 'G',
            },
            {
                description: 'Likes instructions',
                category: 'B',
            },
        ],
        [
            {
                description: 'Takes charge',
                category: 'L',
            },
            {
                description: 'Takes risks',
                category: 'O',
            },
            {
                description: 'Loyal',
                category: 'G',
            },
            {
                description: 'Accurate',
                category: 'B',
            },
        ],
        [
            {
                description: 'Determined',
                category: 'L',
            },
            {
                description: 'Visionary',
                category: 'O',
            },
            {
                description: 'Calm, even keel',
                category: 'G',
            },
            {
                description: 'Consistent',
                category: 'B',
            },
        ],
        [
            {
                description: 'Enterprising',
                category: 'L',
            },
            {
                description: 'Very verbal',
                category: 'O',
            },
            {
                description: 'Enjoys routine',
                category: 'G',
            },
            {
                description: 'Preditable',
                category: 'B',
            },
        ],
        [
            {
                description: 'Competitive',
                category: 'L',
            },
            {
                description: 'Promoter',
                category: 'O',
            },
            {
                description: 'Dislikes change',
                category: 'G',
            },
            {
                description: 'Practical',
                category: 'B',
            },
        ],
        [
            {
                description: 'Problem solver',
                category: 'L',
            },
            {
                description: 'Enjoys popularity',
                category: 'O',
            },
            {
                description: 'Gives in to others',
                category: 'G',
            },
            {
                description: 'Factual',
                category: 'B',
            },
        ],
        [
            {
                description: 'Productive',
                category: 'L',
            },
            {
                description: 'Fun-loving',
                category: 'O',
            },
            {
                description: 'Avoids confrontations',
                category: 'G',
            },
            {
                description: 'Conscientious',
                category: 'B',
            },
        ],
        [
            {
                description: 'Bold',
                category: 'L',
            },
            {
                description: 'Likes variety',
                category: 'O',
            },
            {
                description: 'Sympathetic',
                category: 'G',
            },
            {
                description: 'Perfectionist',
                category: 'B',
            },
        ],
        [
            {
                description: 'Decision maker',
                category: 'L',
            },
            {
                description: 'Spontaneous',
                category: 'O',
            },
            {
                description: 'Nurturing',
                category: 'G',
            },
            {
                description: 'Detail-oriented',
                category: 'B',
            },
        ],
        [
            {
                description: 'Persistent',
                category: 'L',
            },
            {
                description: 'Inspirational',
                category: 'O',
            },
            {
                description: 'Peacemaker',
                category: 'G',
            },
            {
                description: 'Analytical',
                category: 'B',
            },
        ],
    ];

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
            <div className={styles.mainContainer}>
                <Head>
                    <title>LOGB Personality Test</title>
                    <meta
                        name='description'
                        content='5-minute personality test'
                    />
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <main className={styles.main}>
                    <FadeIn className={styles.main} delay={20}>
                        <h1 className={styles.title}>LOGB Personality test</h1>

                        <FadeIn delay={100} className={styles.dndContainer}>
                            {questions}
                        </FadeIn>

                        <Scores scores={scores} />
                    </FadeIn>
                </main>
            </div>

            <div className={styles.footerContainer}>
                <footer className={styles.footer}>
                    <div className={styles.footerTitleContainer}>
                        <h2>LOGB Personality Test</h2>
                    </div>

                    <div className={styles.footerRightContent}>
                        <a
                            href='http://mrfarshtey.net/Psychology/5minute_personality_test.doc'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Test content from mrfarshtey.net
                        </a>

                        <br />

                        <a
                            href='https://github.com/Kevinjchang98/LOGB-Personality-Test'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Created by Kevin Chang
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}
