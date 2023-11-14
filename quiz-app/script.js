/*const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        startTimer(10)
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("quiz bitti");
        clearInterval(counter);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skorGoster(quiz.sorular.length, quiz.dogruCevap);
    }
});

ui.btn_bitir.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {

    quiz.soruIndex = 0;
    quiz.dogruCevap = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevap += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {

    counter = setInterval(timer, 1000);
    startTimerLine();


     function timer() {
        ui.time_second.textContent = time;
        time--;
        if( time < 0 ) {
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";    

            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children) {
                optionSelected(option);
            }            
        }
     }
}
let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counterLine);
        }
    }
}
*/

const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function() {
    if (quiz.questions.length !== quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        startTimer(10);
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("Quiz completed");
        clearInterval(counter);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.showScore(quiz.questions.length, quiz.correctAnswers);
    }
});

ui.btn_finish.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswers = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option) {
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if (question.checkAnswer(answer)) {
        quiz.correctAnswers += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);
    startTimerLine();

    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Time's Up";

            let answer = quiz.getQuestion().correctAnswer;

            for (let option of ui.option_list.children) {
                optionSelected(option);
            }
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }
}
