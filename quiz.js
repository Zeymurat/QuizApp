function Quiz(questions) {
    this.questions = questions;
    this.qIndex = 0;
    this.countCorrect = 0;
}
Quiz.prototype.getQuestion = function () {
    return this.questions[this.qIndex];

}