 /*function UI() {
    this.btn_bitir = document.querySelector(".btn_quit"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.skorGoster = function(toplamSoru, dogruCevap) {

    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru yanıt verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}
 */

function UI() {
    this.btn_finish = document.querySelector(".btn_quit"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
}

UI.prototype.showQuestion = function(question) {
    let questionHTML = `<span>${question.questionText}</span>`;
    let optionsHTML = '';

    for (let answer in question.answerOptions) {
        optionsHTML += 
            `
                <div class="option"> 
                    <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
                </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = questionHTML;
    this.option_list.innerHTML = optionsHTML;

    const optionElements = this.option_list.querySelectorAll(".option");

    for (let option of optionElements) {
        option.setAttribute("onclick", "optionSelected(this)");
    }
};

UI.prototype.showQuestionNumber = function(questionNumber, totalQuestions) {
    let tag = `<span class="badge bg-warning">${questionNumber} / ${totalQuestions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showScore = function(totalQuestions, correctAnswers) {
    let tag = `You answered ${correctAnswers} correct out of ${totalQuestions} questions.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
};
