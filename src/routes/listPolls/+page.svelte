<script>
	import { pollController } from '../../api/poll';
	import { choiceController } from '../../api/choice';
	import { voteController, votes } from '../../api/vote';
	import { currentUser } from '../../api/user';
	let polls = pollController.listPolls();
	let choices = choiceController.listChoices();

	// Add an example poll for debugging
	polls = [
		...polls,
		{
			Title: 'Example Poll',
			Description: 'This is an example poll for debugging purposes.',
			PollID: 1
		}
	];
	choices = [
		...choices,
		{
			Text: 'Example Choice',
			PollID: 1,
			ChoiceID: 1
		},
		{
			Text: 'Example Choice 2',
			PollID: 1,
			ChoiceID: 2
		}
	];

	function vote(pollID, choiceID) {
		voteController.createVote(currentUser.Username, pollID, choiceID);
	}

</script>

<h2>Poll List</h2>

{#each polls as poll}
	<div>
		<h3>{poll.Title}</h3>
		<p>{poll.Description}</p>
		<ul>
			{#each choices as choice}
				{#if choice.PollID === poll.PollID}
					<li>{choice.Text}</li>
					<!-- <button on:click={() => vote(poll.PollID, choice.ChoiceID)}>Vote</button> -->
					<button on:click={() => vote(poll.PollID, choice.ChoiceID)}
						disabled={
							$votes.find((vote) => vote.Username === $currentUser.Username && vote.PollID === choice.PollID) != undefined
						}
						>Vote2</button>
					<p>Number of votes: {$votes.filter(vote => vote.ChoiceID === choice.ChoiceID).length}</p>
				{/if}
			{/each}
		</ul>
	</div>
{/each}
