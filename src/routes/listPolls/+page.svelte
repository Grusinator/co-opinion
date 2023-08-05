<script>
	import { polls } from '../pollStore';
</script>

<h2>Poll List</h2>

{#each $polls as poll}
	<div>
		<h3>{poll.description}</h3>
		<ul>
			<!-- {#each poll.answers as answer}
				<li>{answer.text}: {answer.votes} votes</li>
			{/each} -->
		</ul>
	</div>
{/each}

