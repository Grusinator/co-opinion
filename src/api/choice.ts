// Choices Model
export interface Choice {
    ChoiceID: number;
    PollID: number;
    Text: string;
}

export class ChoiceController {
    private choices: Choice[] = [];

    createChoice(pollID: number, choiceText: string): Choice {
        const choice: Choice = {
            ChoiceID: this.choices.length + 1,
            PollID: pollID,
            Text: choiceText
        };
        this.choices.push(choice);
        return choice;
    }

    getChoice(choiceID: number): Choice | undefined {
        return this.choices.find((choice) => choice.ChoiceID === choiceID);
    }

    updateChoice(choiceID: number, updatedChoice: Choice): Choice | undefined {
        const index = this.choices.findIndex((choice) => choice.ChoiceID === choiceID);
        if (index !== -1) {
            this.choices[index] = updatedChoice;
            return updatedChoice;
        }
        return undefined;
    }

    deleteChoice(choiceID: number): Choice | undefined {
        const index = this.choices.findIndex((choice) => choice.ChoiceID === choiceID);
        if (index !== -1) {
            const deletedChoice = this.choices[index];
            this.choices.splice(index, 1);
            return deletedChoice;
        }
        return undefined;
    }


    listChoices(pollID?: number): Choice[] {
        if (pollID) {
            return this.choices.filter((choice) => choice.PollID === pollID);
        }
        return this.choices;
    }
}

export const choiceController = new ChoiceController();


