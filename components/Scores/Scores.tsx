'use client';

import { useEffect, useState } from 'react';
import homeStyles from '../../app/Home.module.css';
import styles from './Scores.module.css';
import ScoreGraph from '../ScoreGraph/ScoreGraph';

interface ScoresProps {
    scores: Array<Array<number>>;
}

// Ordering of animals for score array
enum Categories {
    'Lion' = 0,
    'Otter' = 1,
    'Golden Retriever' = 2,
    'Beaver' = 3,
}

export default function Scores({ scores }: ScoresProps) {
    // Sum of scores per animal; ordered as defined in enum Categories
    const [scoreSum, setScoreSum] = useState<Array<number>>([0, 0, 0, 0]);
    // Primary animal the current user is based on max score
    // TODO: Consider allowing multiple if a tie exists
    const [primaryCategory, setPrimaryCategory] = useState<Categories>(
        Categories['Lion']
    );

    // Recalculate whenever scores changes
    useEffect(() => {
        let newScoreSum = [0, 0, 0, 0];

        for (let i = 0; i < scores.length; i++) {
            for (let j = 0; j < 4; j++) {
                newScoreSum[j] += scores[i][j];
            }
        }

        let maxCategory = -1;
        let maxCategoryCount = -1;

        for (let i = 0; i < 4; i++) {
            if (maxCategoryCount < newScoreSum[i]) {
                maxCategory = i;
                maxCategoryCount = newScoreSum[i];
            }
        }

        setScoreSum(newScoreSum);
        setPrimaryCategory(maxCategory);
    }, [scores]);

    return (
        <div className={styles.scoresContainer}>
            <h1 className={homeStyles.title}>Scores</h1>

            <ScoreGraph data={scoreSum} />

            <h2>{Categories[primaryCategory]}</h2>

            {/* Assumes detail page's url is /details/{lowercase animal name with no spaces} */}
            <a
                href={
                    'details/' +
                    Categories[primaryCategory].toLowerCase().replace(/\s/g, '')
                }
            >
                More details
            </a>
        </div>
    );
}
