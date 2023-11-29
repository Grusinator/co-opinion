<script>
	import { userController } from '../../api/user';

	let username = '';
	let password = '';

	const register = () => {
		userController.createUser(username, password);
		username = '';
		password = '';
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
