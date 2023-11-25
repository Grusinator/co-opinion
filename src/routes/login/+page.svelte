<script>
    import { userController, currentUser } from '../api/user';

    let username = '';
    let password = '';

    const login = () => {
        userController.login(username, password);
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
