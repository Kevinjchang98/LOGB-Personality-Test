'use client';

import styles from '../Details.module.css';
import FadeIn from 'react-fade-in';

export default function Lion() {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.description}>
                    <FadeIn delay={150}>
                        <h1 className={styles.title}>Lions</h1>
                        <p>
                            Lions are leaders. They are usually the bosses at
                            work&#8230; or at least they think they are! They
                            are decisive, bottom line folks who are observers,
                            not watchers or listeners. They love to solve
                            problems. They are usually individualists who love
                            to seek new adventures and opportunities.
                        </p>

                        <p>
                            Lions are very confident and self-reliant. In a
                            group setting, if no one else instantly takes
                            charge, the Lion will. Unfortunately, if they don’t
                            learn how to tone down their aggressiveness, their
                            natural dominating traits can cause problems with
                            others. Most entrepreneurs are strong lions, or at
                            least have a lot of lion in them.
                        </p>

                        <div className={styles.descriptionColumnsContainer}>
                            <div className={styles.descriptionList}>
                                <h2>Natural strengths</h2>
                                <ul>
                                    <li>Decisive</li>
                                    <li>Goal-oriented</li>
                                    <li>Achievement driven</li>
                                    <li>Gets results</li>
                                    <li>Independent</li>
                                    <li>Risk-taker</li>
                                    <li>Takes charge</li>
                                    <li>Takes initiative</li>
                                    <li>Self-starter</li>
                                    <li>Persistent</li>
                                    <li>Efficient</li>
                                    <li>Competitive</li>
                                    <li>
                                        Enjoys challenges, variety, and change
                                    </li>
                                    <li>
                                        Driven to complete projects quickly and
                                        effectively
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.descriptionList}>
                                <h2>Natural Weaknesses</h2>
                                <ul>
                                    <li>Impatient</li>
                                    <li>Blunt</li>
                                    <li>Poor listener</li>
                                    <li>Impulsive</li>
                                    <li>Demanding</li>
                                    <li>
                                        May view projects as more important than
                                        people
                                    </li>
                                    <li>
                                        Can be insensitive to the feelings of
                                        others
                                    </li>
                                    <li>
                                        May &ldquo;run over&rdquo; others who
                                        are slower to act or speak
                                    </li>
                                    <li>Fears inactivity, relaxation</li>
                                    <li>
                                        Quickly bored by routine or mechanics
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Basic disposition
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Fast-paced, task oriented
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Motivated by
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Results; challenge, action, power, and credit
                                for achievement
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Time Management
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Lions focus on NOW instead of distant future.
                                They get a lot more done in a lot less time than
                                their peers. Hate wasting time; and like to get
                                right to the point.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Communication Style
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Great at initiating communication; not good at
                                listening (one way communicator)
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Decision Making
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Impulsive; makes quick decisions with goal or
                                end result in mind. Results-focused. Needs very
                                few facts to make a decision.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                In Pressure or Tense Situations
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The lion takes command and becomes autocratic.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Greatest Needs
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The lion needs to see results, experience
                                variety, and face new challenges. He needs to
                                solve problems and wants direct answers.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                What the Lion Desires
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Freedom, authority, variety, difficult
                                assignments, opportunity for advancement.
                            </p>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </>
    );
}
