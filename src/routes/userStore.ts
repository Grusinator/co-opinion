import { writable } from 'svelte/store';

type User = {
    username: string;
    password: string;
};

export const users = writable<User[]>([]);
