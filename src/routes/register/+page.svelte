<script>
	import { users } from '../userStore.js';

	let username = '';
	let password = '';

	const register = () => {
		// Check if user already exists
		let userExists = false;
		$users.forEach(user => {
			if (user.username === username) {
				userExists = true;
			}
		});

		if (userExists) {
			alert('User already exists');
		} else {
			// Update the store
			users.update(existingUsers => [...existingUsers, { username, password }]);
			alert('Registration successful');
		}
	};
</script>

<h1>Register</h1>

<form on:submit|preventDefault={register}>
	<label for="username">
		Username
		<input id="username" bind:value={username} type="text" required />
	</label>
	<label for="password">
		Password
		<input id="password" bind:value={password} type="password" required />
	</label>
	<button type="submit">Register</button>
</form>
