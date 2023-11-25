<script>
	import { pollController } from '../api/poll';
	import { choiceController } from '../api/choice';
	import { voteController } from '../api/vote';
	import { currentUser } from '../api/user';
	let polls = pollController.listPolls();
	let choices = choiceController.listChoices();
	let votes = voteController.listVotes();

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
			PollID: 'example-poll-id',
		}
	];

	//pollController.createPoll('Example Poll', 'This is an example poll for debugging purposes.', 'example-user-id');


	function vote(pollID, choiceID) {
		voteController.createVote(currentUser.Username, pollID, choiceID);
	}

	// how do i make the vote button work? something with how the subscribe thing is working

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
					<button on:click={() => vote(poll.PollID, choice.ChoiceID)}>Vote</button>
					<p>Number of votes: {votes.filter(vote => vote.ChoiceID === choice.ChoiceID).length}</p>
				{/if}
			{/each}
		</ul>
	</div>
{/each}
