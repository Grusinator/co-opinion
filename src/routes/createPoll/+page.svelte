<script lang="ts">
	import { pollController } from '../api/poll';
	import { choiceController } from '../api/choice';

	let title = '';
	let description = '';
	let options = [''];

	const handleCreatePoll = () => {
		const newPoll = pollController.createPoll(title, description, 'currentUserId');
		options.forEach(option => {
			if (option.trim()) {
				choiceController.createChoice(newPoll.PollID, option.trim());
			}
		});
		title = '';
		description = '';
		options = [''];
	}

	const handleAddChoice = () => {
		options = [...options, '']; // Spread the existing options and add a new empty string
	}

	const handleRemoveChoice = () => {
		options = options.slice(0, options.length - 1); // Remove the last option but update in a way that triggers a re-render
	}
</script>

<h2>Create a Poll</h2>

<form on:submit|preventDefault={handleCreatePoll}>
	<button type='button' on:click={handleAddChoice}>Add Choice</button>
	<ul>
		<li>
			<button type='submit'>Create Poll</button>
		</li>
		<li>
			<button type='button' on:click={handleAddChoice}>Add Choice</button>
		</li>
		{#if options.length > 1}
			<li>
				<button type='button' on:click={handleRemoveChoice}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</li>
		{/if}
	</ul>

	<label for='title'>Title</label>
	<input id='title' bind:value={title} placeholder='Enter poll title...' />

	<label for='description'>Description</label>
	<input id='description' bind:value={description} placeholder='Enter poll description...' />

	{#each options as option, index}
		<input 
			id={'choice-' + index} 
			bind:value={options[index]} 
			placeholder='Enter choice...' 
		/>
	{/each}	
</form>