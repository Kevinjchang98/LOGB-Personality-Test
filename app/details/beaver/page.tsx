'use client';

import styles from '../../Home.module.css';
import FadeIn from 'react-fade-in';

export default function Beaver() {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.description}>
                    <FadeIn delay={150}>
                        <h1 className={styles.title}>Beavers</h1>
                        <p>
                            Beavers have a strong need to do things right and by
                            the book. In fact, they are the kind of people who
                            actually read instruction manuals. They are great at
                            providing quality control in an office, and will
                            provide quality control in any situation or field
                            that demands accuracy, such as accounting,
                            engineering, etc. Because rules, consistency and
                            high standards are so important to beavers, they are
                            often frustrated with others who do not share these
                            same characteristics. Their strong need for
                            maintaining high (and oftentimes unrealistic)
                            standards can short-circuit their ability to express
                            warmth in a relationship.
                        </p>

                        <div className={styles.descriptionColumnsContainer}>
                            <div className={styles.descriptionList}>
                                <h2>Natural strengths</h2>
                                <ul>
                                    <li>Accurate</li>
                                    <li>Analytical</li>
                                    <li>Detail-oriented</li>
                                    <li>Thoroughness</li>
                                    <li>Industrious</li>
                                    <li>Orderly</li>
                                    <li>Methodical and exhaustive</li>
                                    <li>High standards</li>
                                    <li>Intuitive</li>
                                    <li>Controlled</li>
                                </ul>
                            </div>

                            <div className={styles.descriptionList}>
                                <h2>Natural Weaknesses</h2>
                                <ul>
                                    <li>Too hard on self</li>
                                    <li>Too critical of others</li>
                                    <li>Perfectionist</li>
                                    <li>Overly cautious</li>
                                    <li>
                                        Won&apos;t make decisions without
                                        &ldquo;all&rdquo; the facts
                                    </li>
                                    <li>Too picky</li>
                                    <li>Overly sensitive</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Basic disposition
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Slow-paced, task-oriented
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Motivated by
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The desire to be right and maintain quality
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Time Management
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Beavers tend to work slowly to make sure they
                                are accurate
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Communication Style
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Beavers are good listeners, communicate details,
                                and are usually diplomatic
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Decision Making
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Avoids making decisions; needs lots of
                                information before they will make a decision
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                In Pressure or Tense Situations
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The beaver tries to avoid pressure or tense
                                situations. They can ignore deadlines
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                Greatest Needs
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                The beaver needs security, gradual change and
                                time to adjust to it
                            </p>
                        </div>

                        <div className={styles.descriptionColumnsContainer}>
                            <h3 className={styles.descriptionLeftHeader}>
                                What the Beaver Desires
                            </h3>
                            <p className={styles.descriptionRightContent}>
                                Clearly defined tasks, stability, security, low
                                risk, and tasks that require precision and
                                planning
                            </p>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </>
    );
}
