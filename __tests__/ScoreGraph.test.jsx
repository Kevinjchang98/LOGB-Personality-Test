import { render } from '@testing-library/react';
import ScoreGraph from '../components/ScoreGraph/ScoreGraph';
import '@testing-library/jest-dom';

describe('ScoreGraph', () => {
    it('renders a graph with valid data', () => {
        const data = [0, 0, 0, 0];

        const { container } = render(<ScoreGraph data={data} />);

        expect(container.getElementsByClassName('chartContainer').length).toBe(
            1
        );
    });

    it('renders null with invalid data', () => {
        const { container } = render(<ScoreGraph data={null} />);

        expect(container.getElementsByClassName('chartContainer').length).toBe(
            0
        );
    });
});
