<script>
    import { voteController } from '../api/vote';
    import { votes} from '../api/stores';
    import { currentUser } from '../api/stores';
  
    export let choice;
    export let pollID;
    
    $: voteCount = $votes.filter(vote => vote.ChoiceID === choice.ChoiceID).length;
    $: isVotedFor = $votes.some(vote => vote.Username === ($currentUser ?? {}).Username && vote.PollID === pollID);

    function vote() {
        if (!$currentUser) {
            alert('You must be logged in to vote!');
        }
        else if (isVotedFor) {
            // voteController.deleteVote($currentUser.Username, pollID, choice.ChoiceID);
            isVotedFor = false;    
        }
        else {
            // voteController.createVote($currentUser.Username, pollID, choice.ChoiceID);
            isVotedFor = true;
        }        
    }
  </script>
  

<div class="choice">
    <button class="choice-button" on:click={vote}>{choice.Text}</button>
    <p class="choice-icon">{isVotedFor ? '✓' : 'x'}</p>
    <p class="choice-votes">Number of votes: {voteCount}</p>
</div>

<style>
    .choice {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }

    .choice-button {
        flex-grow: 1;
        margin-right: 10px;
    }

    .choice-icon {
        font-size: 1.5em;
        margin-right: 10px;
    }

    .choice-votes {
        font-size: 1.5em;
    }
</style>