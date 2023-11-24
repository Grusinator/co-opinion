// Votes Model
interface Vote {
  Username: string;
  PollID: number;
  ChoiceID: number;
  Timestamp: Date;
}

class VoteController {
  private votes: Vote[] = [];

  createVote(vote: Vote): Vote {
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


