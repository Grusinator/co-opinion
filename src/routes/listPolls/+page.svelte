<script>
	import { polls } from '../pollStore.js';
</script>

<h2>Poll List</h2>

{#each polls as poll}
	<div>
		<h3>{poll.description}</h3>
		<ul>
			{#each poll.options as option}
				<li>{option}</li>
			{/each}
		</ul>
	</div>
{/each}
