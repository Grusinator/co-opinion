<script>
	import { users } from '../userStore.js';
</script>

<h2>User List</h2>

{#each users as user}
	<div>
		<h3>{user.username} : {user.password}</h3>
	</div>
{/each}