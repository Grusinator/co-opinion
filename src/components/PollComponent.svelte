<script>
    import ChoiceComponent from './ChoiceComponent.svelte';
  
    export let poll;
    export let choices;
</script>

<style>
    .poll-container {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>

<div class="poll-container">
    <h3>{poll.Title}</h3>
    <p>{poll.Description}</p>
    <ul>
        {#each choices as choice (choice.ChoiceID)}
            {#if choice.PollID === poll.PollID}
                <li>
                    <ChoiceComponent {choice} pollID={poll.PollID} />
                </li>
            {/if}
        {/each}
    </ul>
</div>
  