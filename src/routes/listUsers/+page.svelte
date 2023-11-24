<script>
	import { userController } from '../api/user';
	let users = userController.listUsers();

	// Add an example user for debugging
	// users = [
	// 	...users,
	// 	{
	// 		Username: 'example-username',
	// 		Password: 'example-password'
	// 	}
	// ];
</script>

<h2>User List</h2>

{#each $users as user}
	<div>
		<h3>{user.Username} : {user.Password}</h3>
	</div>
{/each}