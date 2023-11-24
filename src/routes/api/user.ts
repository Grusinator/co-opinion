
// Users Model
interface User {
    Username: string;
    Email: string;
    PasswordHash: string;
    CreatedAt: Date;
}

class UserController {
    private users: User[] = [];

    createUser(username: string, password: string): User {
        const existingUser = this.users.find((u) => u.Username === username);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const user: User = {
            Username: username,
            Email: '', // Set the email as per your requirements
            PasswordHash: this.hashPassword(password),
            CreatedAt: new Date()
        };
        this.users.push(user);
        return user;
    }

    getUser(username: string): User | undefined {
        return this.users.find((user) => user.Username === username);
    }

    login(username: string, password: string): User | undefined {
        const user = this.getUser(username);
        if (user && user.PasswordHash === this.hashPassword(password)) {
            return user;
        }
        return undefined;
    }

    private hashPassword(password: string): string {
        // Implement password hashing logic here
        return password; // Placeholder implementation, replace with actual hashing logic
    }

    updateUser(username: string, updatedUser: User): User | undefined {
        const index = this.users.findIndex((user) => user.Username === username);
        if (index !== -1) {
            this.users[index] = updatedUser;
            return updatedUser;
        }
        return undefined;
    }

    deleteUser(username: string): User | undefined {
        const index = this.users.findIndex((user) => user.Username === username);
        if (index !== -1) {
            const deletedUser = this.users[index];
            this.users.splice(index, 1);
            return deletedUser;
        }
        return undefined;
    }

    listUsers(): User[] {
        return this.users;
    }
}

export const userController = new UserController();

