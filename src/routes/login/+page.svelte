<script>
	import { users } from '../userStore';

	let username = '';
	let password = '';
	let message = '';

	const login = () => {
		// Find the user
		const user = $users.find(user => user.username === username && user.password === password);

		if (user) {
			message = 'Login successful';
		} else {
			message = 'Invalid username or password';
		}
	};

	const resetMessage = () => {
		message = '';
	};
</script>

<h1>Login</h1>

<form on:submit|preventDefault={login}>
	<label for="username">
		Username
		<input id="username" bind:value={username} type="text" required on:input={resetMessage} />
	</label>
	<label for="password">
		Password
		<input id="password" bind:value={password} type="password" required on:input={resetMessage} />
	</label>
	<button type="submit">Login</button>
</form>

{#if message}
	<p>{message}</p>
{/if}
