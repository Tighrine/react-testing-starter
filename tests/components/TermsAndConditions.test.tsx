import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import TermsAndConditions from '../../src/components/TermsAndConditions';

describe('TermsAndConditions', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();
    });

    it('should enable the submit button when the checkbox is checked', async () => {
        render(<TermsAndConditions />);
        const checkbox = screen.getByRole('checkbox');
        await userEvent.setup().click(checkbox);
        const submitButton = screen.getByRole('button');
        expect(checkbox).toBeChecked();
        expect(submitButton).not.toBeDisabled();
    });
});