<script>
    import { userController } from '../../api/user';
	import { currentUser } from '../../api/stores';

    let username = '';
    let password = '';

	//debugging purposes
	// if (currentUser === undefined) {
	// 	userController.createUser('admin', 'admin');
	// 	let user = userController.login('admin', 'admin');
	// 	currentUser.set(user);
	// }

    const login = () => {
        let user = userController.login(username, password);
		currentUser.set(user);
    };
</script>

<h1>Login</h1>

<form on:submit|preventDefault={login}>
	<label for="username">
		Username
		<input id="username" bind:value={username} type="text" required />
	</label>
	<label for="password">
		Password
		<input id="password" bind:value={password} type="password" required />
	</label>
	<button type="submit">Login</button>
</form>
	
{#if $currentUser !== undefined}
	<p>Login successful, {$currentUser.Username}!</p>
{/if}
