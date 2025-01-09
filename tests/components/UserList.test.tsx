import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';

describe('UserList', () => {
    it('should not render the list when users is empty', () => {
        render(<UserList users={[]} />);
        const list = screen.queryByRole('list');
        expect(list).not.toBeInTheDocument();
        expect(screen.getByText(/no users/i)).toBeInTheDocument();
    });

    it('should render the list of users', () => {
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        ];
        render(<UserList users={users} />);
        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(users.length);
        users.forEach((user) => {
            const link = screen.getByRole('link', { name: user.name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        });
    });
});