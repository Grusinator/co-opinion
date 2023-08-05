import { writable } from 'svelte/store';

// This creates a writable store with the initial value of an empty array.
export const polls = writable([]);
