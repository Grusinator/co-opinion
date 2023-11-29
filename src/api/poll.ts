// Polls Model
export interface Poll {
    PollID: number;
    CreatedBy: string;
    Title: string;
    Description?: string;
    CreatedAt: Date;
    EndTime?: Date;
}

class PollController {
    private polls: Poll[] = [];

    createPoll(title: string, description: string, createdBy: string): Poll {
        const newPoll: Poll = {
            PollID: this.polls.length + 1,
            CreatedBy: createdBy,
            Title: title,
            Description: description,
            CreatedAt: new Date()
        };
        this.polls.push(newPoll);
        return newPoll;
    }

    listPolls(): Poll[] {
        return this.polls;
    }

    getPoll(pollID: number): Poll | undefined {
        return this.polls.find((poll) => poll.PollID === pollID);
    }

    updatePoll(pollID: number, updatedPoll: Poll): Poll | undefined {
        const index = this.polls.findIndex((poll) => poll.PollID === pollID);
        if (index !== -1) {
            this.polls[index] = updatedPoll;
            return updatedPoll;
        }
        return undefined;
    }

    deletePoll(pollID: number): Poll | undefined {
        const index = this.polls.findIndex((poll) => poll.PollID === pollID);
        if (index !== -1) {
            const deletedPoll = this.polls[index];
            this.polls.splice(index, 1);
            return deletedPoll;
        }
        return undefined;
    }
}

export const pollController = new PollController();
