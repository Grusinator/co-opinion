import { writable } from 'svelte/store';

const defaultPoll = {
    id: 1,
    description: "Do you like Svelte?",
    // answers: [
    //     { text: 'Yes', votes: 0 },
    //     { text: 'No', votes: 0 }
    // ]
}
export const polls = writable([defaultPoll]);
