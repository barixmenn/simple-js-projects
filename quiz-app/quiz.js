 /*function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogruCevap = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
} */

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.correctAnswers = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}