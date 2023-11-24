<script>
	import { pollController } from '../api/poll';
	import { choiceController } from '../api/choice';
	let polls = pollController.listPolls();
	let choices = choiceController.listChoices();


	// Add an example poll for debugging
	polls = [
		...polls,
		{
			Title: 'Example Poll',
			Description: 'This is an example poll for debugging purposes.',
			PollID: 'example-poll-id'
		}
	];
	choices = [
		...choices,
		{
			ChoiceText: 'Example Choice',
			PollID: 'example-poll-id'
		}
	];
	</script>

	<h2>Poll List</h2>

	{#each polls as poll}
		<div>
			<h3>{poll.Title}</h3>
			<p>{poll.Description}</p>
			<ul>
				{#each choices as choice}
					{#if choice.PollID === poll.PollID}
						<li>{choice.ChoiceText}</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/each}

