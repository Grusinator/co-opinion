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

