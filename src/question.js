class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
}
    // 2. shuffleChoices()
    shuffleChoices() {
        let input = this.choices;

        for (let i = input.length - 1; i >= 0; i--) {
      
          let randomIndex = Math.floor(Math.random() * (i + 1));
          let itemAtIndex = input[randomIndex];
      
          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
        }
        return input;
    }
}