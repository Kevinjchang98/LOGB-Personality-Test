'use client';

import styles from '../../Home.module.css';
import FadeIn from 'react-fade-in';

export default function GoldenRetriever() {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.description}>
                    <FadeIn delay={150}>
                        <h1 className={styles.title}>Golden Retrievers</h1>
                        <p>
                            One word describes these people: LOYAL. They’re so
                            loyal, in fact, that they can absorb the most
                            emotional pain and punishment in a relationship and
                            still stay committed. They are great listeners,
                            incredibly empathetic and warm encouragers. However,
                            they tend to be such pleasers that they can have
                            great difficulty being assertive in a situation or
                            relationship when it’s needed.
                        </p>

                        <div className={styles.descriptionColumnsContainer}>
                            <div className={styles.descriptionList}>
                                <h2>Natural strengths</h2>
                                <ul>
                                    <li>Patient</li>
                                    <li>Easy-going</li>
                                    <li>Team player</li>
                                    <li>Stable</li>
                                    <li>Empathetic</li>
                                    <li>Compassionate</li>
                                    <li>Sensitive to feelings of others</li>
                                    <li>Tremendously loyal</li>
                                    <li>Puts people above projects</li>
                                    <li>Dependable</li>
                                    <li>Reliable</li>
                                    <li>Supportive</li>
                                    <li>Agreeable</li>
                                </ul>
                            </div>

                            <div className={styles.descriptionList}>
                                <h2>Natural Weaknesses</h2>
                                <ul>
                                    <li>Indecisive</li>
                                    <li>Over-accommodating</li>
                                    <li>
                                        May sacrifice results for the sake of
                                        harmony
                                    </li>
                                    <li>Slow to initiate</li>
                                    <li>
                                        Avoids confrontation even when needed
                                    </li>
                                    <li>
                                        Tends to hold grudges and remember hurts
                                        inflicted by others
                                    </li>
                                    <li>Fears change</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Basic disposition
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Slow-paced, people-oriented
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Motivated by
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Desire for good relationships and appreciation
                                of others
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Time Management
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Golden Retrievers focus on the present and
                                devote lots of time to helping others and
                                building relationships
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Communication Style
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Two-way communicator; great listener and
                                provides empathetic response
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Decision Making
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Makes decisions more slowly, wants input from
                                others, and often yields to the input
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                In Pressure or Tense Situations
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The Golden Retriever gives in to the opinions,
                                ideas, and wishes of others. Often too tolerant
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Greatest Needs
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The Golden Retriever needs security; gradual
                                change and time to adjust to it; an environment
                                free of conflict
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                What the Golden Retriever Desires
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Quality relationships; security; consistent
                                known environment; a relaxed and friendly
                                environment; freedom to work at own pace
                            </p>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </>
    );
}
