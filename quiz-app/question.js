/*
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];
*/
function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer;
};

let questions = [
    new Question("1-Which one is a JavaScript package manager?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Question("2-Which one is not evaluated in the frontend scope?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Question("3-Which one is evaluated in the backend scope?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Question("4-Which one does not use the JavaScript programming language?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];


