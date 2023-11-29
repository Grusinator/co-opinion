<script>
    import ChoiceComponent from './ChoiceComponent.svelte';
  
    export let poll;
    export let choices;
  </script>
  
  <div>
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
  