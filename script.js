//Object
// let question ={
//     qName:"Hangisi javascript paket yönetim uygulamasıdır?",
//     qOptions: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     qCorrectOpt: "c",
//     checkAns: function(ans){
//         return ans === this.qCorrectOpt
//     }
// }
// let question2 ={
//     qName:"Hangisi .Net paket yönetim uygulamasıdır?",
//     qOptions: {
//         a: "Node.js",
//         b: "Nuget",
//         c: "Npm"
//     },
//     qCorrectOpt: "b",
//     checkAns: function(ans){
//         return ans === this.qCorrectOpt
//     }
// }

//Class , Constructor => Obj * 30
// ES5, ES6, ES7

const quiz = new Quiz(questions);
const ui = new UI();
ui.btnStart.addEventListener("click", function () {
    if (quiz.questions.length != quiz.qIndex) {
        ui.quizBox.classList.add("active");
        startTimer(10);
        startTimerLine();
        let q = quiz.getQuestion();
        ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());
    } else {
        console.log("End Of Quiz!");
    }
});

ui.btnPrev.addEventListener("click", function () {
    quiz.qIndex -= 1;
    if (quiz.qIndex > 0) {
        ui.btnNext.classList.add("active");
        document.querySelector(".submit-btn").classList.remove("active");
        clearInterval(countTime);
        clearInterval(countLine);
        startTimer(10);
        startTimerLine();
        let q = quiz.getQuestion();
        ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());

    } else {
        ui.btnPrev.classList.remove("active");
        clearInterval(countTime);
        clearInterval(countLine);
        let q = quiz.getQuestion();
        ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());
        console.log("Beginning Of Quiz!");
    }
});

ui.btnNext.addEventListener("click", function () {
    quiz.qIndex += 1;
    if (quiz.qIndex < quiz.questions.length - 1) {
        ui.btnPrev.classList.add("active");
        ui.btnNext.classList.remove("active");
        clearInterval(countTime);
        clearInterval(countLine);
        startTimer(10);
        startTimerLine();
        let q = quiz.getQuestion();
        ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());
    } else {
        clearInterval(countTime);
        clearInterval(countLine);
        console.log("End Of Quiz!");
        ui.btnNext.classList.remove("active");
        document.querySelector(".submit-btn").classList.add("active");
        let q = quiz.getQuestion();
        ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
        ui.showQuestion(quiz.getQuestion());
    }
});
ui.btnSubmit.addEventListener("click", function () {
    ui.scoreBoard.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showResult(quiz.countCorrect, quiz.questions.length);
});


function optionSelected(optionss) {
    clearInterval(countTime);
    clearInterval(countLine);
    let answered = optionss.querySelector("span b").textContent;
    let ques = quiz.getQuestion();
    if (ques.checkAns(answered)) {
        quiz.countCorrect += 1;
        optionss.classList.add("correct");
        optionss.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        optionss.classList.add("incorrect");
        optionss.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for (let i = 0; i < ui.optionList.children.length; i++) {
        ui.optionList.children[i].classList.add("disabled");
    }
    if (quiz.qIndex < quiz.questions.length - 1) {
        ui.btnNext.classList.add("active");
    }
}

ui.btnRepeat.addEventListener("click", function () {
    quiz.qIndex = 0;
    quiz.countCorrect = 0;
    ui.scoreBoard.classList.remove("active");
    document.querySelector(".submit-btn").classList.remove("active");
    ui.btnStart.click();
    // if (quiz.questions.length != quiz.qIndex) {
    //     ui.quizBox.classList.add("active");
    //     let q = quiz.getQuestion();
    //     ui.showQuestionNumber(quiz.qIndex + 1, quiz.questions.length);
    //     ui.showQuestion(quiz.getQuestion());
    // } else {
    //     console.log("End Of Quiz!");
    // }
});
ui.btnFinish.addEventListener("click", function () {
    window.location.reload();
    // quiz.qIndex = 0;
    // quiz.countCorrect = 0;
    // ui.scoreBoard.classList.remove("active");
    // document.querySelector(".submit-btn").classList.remove("active");
    // ui.quizBox.classList.remove("active");
});

let countTime;
function startTimer(time) {
    countTime = setInterval(timer, 1000);
    function timer() {
        ui.time_sec.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(countTime);
            ui.time_text.textContent = "Time is up!!";
            let showAnswer = quiz.getQuestion().qCorrectOpt;
            for (let questionOpt of ui.optionList.children) {
                if (questionOpt.querySelector("span b").textContent == showAnswer) {
                    questionOpt.classList.add("correct");
                    questionOpt.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                questionOpt.classList.add("disabled");
            }
            ui.btnNext.classList.add("active");
        }
    }
}
let countLine;
function startTimerLine() {
    let line_width = 0;
    countLine = setInterval(timerLine,110);
    function timerLine(){
        line_width += 1;
        ui.time_line.style.width = line_width + "%";
        if(line_width==100){
            clearInterval(countLine);
        }


    }
}