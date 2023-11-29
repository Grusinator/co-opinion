import { render, fireEvent } from '@testing-library/svelte';
import Login from '../../../src/routes/login/+page.svelte';
import { userController } from 'src/api/user';
import { currentUser } from '../../api/stores';

jest.mock('../../api/user');
jest.mock('../../api/stores');

describe('Login Component', () => {
    beforeEach(() => {
        // Reset mocks before each test
        userController.login.mockClear();
        currentUser.set.mockClear();
    });

    it('should login successfully with correct credentials', async () => {
        // Arrange
        const username = 'testuser';
        const password = 'testpass';
        userController.login.mockImplementation((u, p) => {
            if (u === username && p === password) {
                return { Username: u };
            }
        });

        // Act
        const { getByLabelText, getByText } = render(Login);
        await fireEvent.input(getByLabelText('Username'), { target: { value: username } });
        await fireEvent.input(getByLabelText('Password'), { target: { value: password } });
        await fireEvent.click(getByText('Login'));

        // Assert
        expect(userController.login).toHaveBeenCalledWith(username, password);
        expect(currentUser.set).toHaveBeenCalledWith({ Username: username });
    });
});
