'use client';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import styles from './ScoreGraph.module.css';

export default function ScoreGraph({ data }) {
    // Don't render if data is null
    if (!data) return null;

    // Convert data to be percentage; max possible score in any category is 40
    const graphData = [
        {
            data: {
                lion: data[0] / 40,
                otter: data[1] / 40,
                goldenretriever: data[2] / 40,
                beaver: data[3] / 40,
            },
            meta: { color: 'blue' },
        },
    ];

    // Axes labels on graph
    const captions = {
        // columns
        lion: 'L ' + data[0],
        otter: 'O ' + data[1],
        goldenretriever: 'G ' + data[2],
        beaver: 'B ' + data[3],
    };

    return (
        <div className={styles.chartContainer}>
            <RadarChart
                captions={captions}
                data={graphData}
                size={340}
                options={{
                    scales: 4,
                    captionMargin: 20,

                    captionProps: () => ({
                        className: 'caption',
                        textAnchor: 'middle',
                        fontSize: 16,
                    }),
                }}
            />
        </div>
    );
}
