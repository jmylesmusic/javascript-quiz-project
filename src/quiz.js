class Quiz {
    // YOUR CODE HERE:
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }


    // 2. getQuestion()
    getQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex += 1;
}


    // 4. shuffleQuestions()
    shuffleQuestions(){
        let input = this.questions;

        for (let i = input.length - 1; i >= 0; i--) {
      
          let randomIndex = Math.floor(Math.random() * (i + 1));
          let itemAtIndex = input[randomIndex];
      
          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
        }
        return input;
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers += 1;}
}
    // 6. hasEnded()
    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true;
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
        this.questions = this.questions.filter((question) => question.difficulty === difficulty);
    }
    };

    averageDifficulty() {
        const cumulativeDifficulty = this.questions.reduce((acc, question) => acc + question.difficulty, 0);
        return cumulativeDifficulty / this.questions.length;
    }
};
