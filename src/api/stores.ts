import { writable } from "svelte/store";
import type { User } from "./user";
import type { Vote } from "./vote";
import type { Poll } from "./poll";
import type { Choice } from "./choice";

export const currentUser = writable<User | undefined>(undefined);
export const polls = writable<Poll[]>([]);
export const choices = writable<Choice[]>([]);
export const votes = writable<Vote[]>([])


