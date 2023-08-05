<script lang="ts">
	let feed = [];
	let text = '';

	function addText() {
		feed = [...feed, text];
		text = '';
	}
</script>

<div class="feed">
	{#each feed as item (item)}
		<div class="feed-item">{item}</div>
	{/each}
</div>

<div class="input-area">
	<input bind:value={text} on:keypress={(e) => e.key === 'Enter' && addText()} placeholder="Type your text here..." />
	<button on:click={addText}>Add</button>
</div>

<style>
	.feed {
		width: 100%;
		height: calc(100vh - 50px);
		overflow-y: auto;
		padding: 1em;
		box-sizing: border-box;
	}

	.feed-item {
		border-bottom: 1px solid #ccc;
		padding: 1em 0;
	}

	.input-area {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 1em;
		box-sizing: border-box;
		background: #fff;
		border-top: 1px solid #ccc;
	}

	.input-area input {
		width: 80%;
		height: 30px;
		padding: 0 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.input-area button {
		width: 18%;
		margin-left: 2%;
		height: 34px;
		background: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
