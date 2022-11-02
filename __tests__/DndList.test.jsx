import { render } from '@testing-library/react';
import DndList from '../app/DndList';
import '@testing-library/jest-dom';

describe('DndList', () => {
    it('renders all questions properly', () => {
        const testData = [
            {
                description: 'contentA',
                category: 'L',
            },
            {
                description: 'contentB',
                category: 'O',
            },
            {
                description: 'contentC',
                category: 'G',
            },
            {
                description: 'contentD',
                category: 'B',
            },
        ];

        const setScores = () => {};

        const { queryByText } = render(
            <DndList data={testData} setScores={setScores} questionIndex={0} />
        );

        expect(queryByText('contentA')).toBeInTheDocument();
        expect(queryByText('contentB')).toBeInTheDocument();
        expect(queryByText('contentC')).toBeInTheDocument();
        expect(queryByText('contentD')).toBeInTheDocument();
    });
});
