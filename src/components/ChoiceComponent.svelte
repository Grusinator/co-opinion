<script>
    import { voteController, votes } from '../api/vote';
    import { currentUser } from '../api/user';
  
    export let choice;
    export let pollID;
  
    function vote() {
      voteController.createVote($currentUser.Username, pollID, choice.ChoiceID);
    }
  
    $: voteCount = $votes.filter(vote => vote.ChoiceID === choice.ChoiceID).length;
    $: isVotedFor = $votes.some(vote => vote.Username === $currentUser.Username && vote.PollID === pollID);
  </script>
  
  <button on:click={vote} disabled={isVotedFor}>
    {choice.Text} {isVotedFor ? '✓' : ''}
  </button>
  <p>Number of votes: {voteCount}</p>
  