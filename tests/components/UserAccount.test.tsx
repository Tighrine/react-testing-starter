import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it('should render the user account details', () => {
        const { unmount } = render(<UserAccount user={{
            id: 0,
            name: 'Aghiles',
            isAdmin: undefined
        }} />);
        expect(screen.getByText(/Aghiles/i)).toBeInTheDocument();
        unmount();
    })

    it('should render the edit button for admin users', () => {
        const { unmount } = render(<UserAccount user={{
            id: 0,
            name: 'Aghiles',
            isAdmin: true
        }} />);
        const editButton = screen.getByRole('button');
        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/edit/i);
        unmount()
    });

    it('should not render the edit button for non-admin users', () => {
        render(<UserAccount user={{
            id: 0,
            name: 'Aghiles',
            isAdmin: false
        }} />);
        const editButton = screen.queryByRole('button');
        expect(editButton).not.toBeInTheDocument();
    });
})