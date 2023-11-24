import { ChoiceController } from './choice';

describe('ChoiceController', () => {
  let choiceController: ChoiceController;

  beforeEach(() => {
    choiceController = new ChoiceController();
  });

  test('should create a choice', () => {
    const pollID = 1;
    const choiceText = 'Choice 1';
    const choice = choiceController.createChoice(pollID, choiceText);

    expect(choice.ChoiceID).toBe(1);
    expect(choice.PollID).toBe(pollID);
    expect(choice.Text).toBe(choiceText);
  });

  test('should get a choice', () => {
    const pollID = 1;
    const choiceText = 'Choice 1';
    const choice = choiceController.createChoice(pollID, choiceText);

    const retrievedChoice = choiceController.getChoice(choice.ChoiceID);

    expect(retrievedChoice).toEqual(choice);
  });

  test('should update a choice', () => {
    const pollID = 1;
    const choiceText = 'Choice 1';
    const choice = choiceController.createChoice(pollID, choiceText);

    const updatedChoiceText = 'Updated Choice 1';
    const updatedChoice = { ...choice, Text: updatedChoiceText };

    const updated = choiceController.updateChoice(choice.ChoiceID, updatedChoice);

    expect(updated).toEqual(updatedChoice);
  });

  test('should delete a choice', () => {
    const pollID = 1;
    const choiceText = 'Choice 1';
    const choice = choiceController.createChoice(pollID, choiceText);

    const deleted = choiceController.deleteChoice(choice.ChoiceID);

    expect(deleted).toEqual(choice);
    expect(choiceController.getChoice(choice.ChoiceID)).toBeUndefined();
  });
});