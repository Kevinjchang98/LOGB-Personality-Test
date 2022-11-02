'use client';

import styles from '../Details.module.css';
import FadeIn from 'react-fade-in';

export default function Otter() {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.description}>
                    <FadeIn delay={150}>
                        <h1 className={styles.title}>Otters</h1>
                        <p>
                            Otters are excitable, fun seeking, cheerleader types
                            who love to talk! They’re great at motivating others
                            and need to be in an environment where they can talk
                            and have a vote on major decisions. The otters’
                            outgoing nature makes them great networkers — they
                            usually know a lot of people who know a lot of
                            people. They can be very loving and encouraging
                            unless under pressure, when they tend to use their
                            verbal skills to attack. They have a strong desire
                            to be liked and enjoy being the center of attention.
                            They are often very attentive to style, clothes, and
                            flash. Otters are the life of any party; and most
                            people really enjoy being around them.
                        </p>

                        <div className={styles.descriptionColumnsContainer}>
                            <div className={styles.descriptionList}>
                                <h2>Natural strengths</h2>
                                <ul>
                                    <li>Enthusiastic</li>
                                    <li>Optimistic</li>
                                    <li>Good communicator</li>
                                    <li>Emotional and passionate</li>
                                    <li>Motivational and inspirational</li>
                                    <li>Outgoing</li>
                                    <li>Personal</li>
                                    <li>Dramatic</li>
                                    <li>Fun-loving</li>
                                </ul>
                            </div>

                            <div className={styles.descriptionList}>
                                <h2>Natural Weaknesses</h2>
                                <ul>
                                    <li>Unrealistic</li>
                                    <li>Not detail-oriented</li>
                                    <li>Disorganized</li>
                                    <li>Impulsive</li>
                                    <li>Listens to feelings above logic</li>
                                    <li>Reactive</li>
                                    <li>Can be too talkative</li>
                                    <li>Excitable</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Basic disposition
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Fast-paced, people oriented
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Motivated by
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Recognition and approval of others
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Time Management
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Otters focus on the future and have a tendency
                                to rush to the next exciting thing.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Communication Style
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Enthusiastic and stimulating, often one-way; but
                                can inspire and motivate others.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Decision Making
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Intuitive and fast. Makes lots of “right calls”
                                and lots of wrong ones.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                In Pressure or Tense Situations
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The otter ATTACKS. Can be more concerned about
                                their popularity than about achieving tangible
                                results.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Greatest Needs
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The otter needs social activities and
                                recognition; activities that are fun, and
                                freedom from details.
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                What the Otter Desires
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Prestige, friendly relationships, opportunity to
                                help and motivate others, and opportunities to
                                verbally share their ideas.
                            </p>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </>
    );
}
