<script>
	import PollComponent from '../../components/PollComponent.svelte';
	import { pollController } from '../../api/poll';
	import { choiceController } from '../../api/choice';

	let poll = pollController.createPoll('Example Poll', 'This is an example poll for debugging purposes.', 'currentUserId');
	choiceController.createChoice(poll.PollID, 'Example Choice');
	choiceController.createChoice(poll.PollID, 'Example Choice 2');
  
	let polls = pollController.listPolls();
	let choices = choiceController.listChoices();
  

  </script>
  
  <h2>Poll List</h2>
  
  {#each polls as poll (poll.PollID)}
	<PollComponent {poll} {choices} />
  {/each}
  