// Votes Model
interface Vote {
  Username: string;
  PollID: number;
  ChoiceID: number;
  Timestamp: Date;
}

class VoteController {
  private votes: Vote[] = [];
  listVotes() {
	  return this.votes;
  }


  createVote(username: string, pollID: number, choiceID: number): Vote {
    const vote: Vote = {
      Username: username,
      PollID: pollID,
      ChoiceID: choiceID,
      Timestamp: new Date()
    };
    this.votes.push(vote);
    return vote;
  }

  getVote(username: string, pollID: number): Vote | undefined {
    return this.votes.find((vote) => vote.Username === username && vote.PollID === pollID);
  }

  updateVote(username: string, pollID: number, updatedVote: Vote): Vote | undefined {
    const index = this.votes.findIndex((vote) => vote.Username === username && vote.PollID === pollID);
    if (index !== -1) {
      this.votes[index] = updatedVote;
      return updatedVote;
    }
    return undefined;
  }

  deleteVote(username: string, pollID: number): Vote | undefined {
    const index = this.votes.findIndex((vote) => vote.Username === username && vote.PollID === pollID);
    if (index !== -1) {
      const deletedVote = this.votes[index];
      this.votes.splice(index, 1);
      return deletedVote;
    }
    return undefined;
  }
}

export const voteController = new VoteController();


