<script>
	import { polls } from '../pollStore.js';
	let description = '';
	let options = '';
	
	const createPoll = () => {
		let optionsArray = options.split(',');
		polls.push({description: description, options: optionsArray});
		description = '';
		options = '';
	}
</script>

<h2>Create a Poll</h2>

<form on:submit|preventDefault={createPoll}>
	<label for='description'>Description</label>
	<input id='description' bind:value={description} placeholder='Enter poll description...' />
	
	<label for='options'>Options (separated by commas)</label>
	<input id='options' bind:value={options} placeholder='Enter options...' />
	
	<button type='submit'>Create Poll</button>
</form>
