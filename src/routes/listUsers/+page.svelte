<script>
	import { userController } from '../../api/user';
	import { writable } from 'svelte/store';
	let users = writable(userController.listUsers()); 
	/* Create a writable store with the list of users,
	// dont know why writable is needed */

</script>

<h2>User List</h2>

{#each $users as user}
	<div>
		<h3>{user.Username}</h3>
	</div>
{/each}
