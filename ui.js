function UI() {
    this.btnStart = document.querySelector(".btn-start"),
        this.btnPrev = document.querySelector(".prev-btn"),
        this.btnNext = document.querySelector(".next-btn"),
        this.btnSubmit = document.querySelector(".submit-btn"),
        this.quizBox = document.querySelector(".quiz-box"),
        this.scoreBoard = document.querySelector(".score-box"),
        this.optionList = document.querySelector(".option-list"),
        this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
        this.btnRepeat = document.querySelector(".repeat-btn"),
        this.btnFinish = document.querySelector(".finish-btn"),
        this.time_text = document.querySelector(".time_text"),
        this.time_sec = document.querySelector(".time_sec"),
        this.time_line = document.querySelector(".time_line")
}

UI.prototype.showQuestion = function(q) {
    let question = `<span>${q.qName}</span>`;
    let options = '';
    for (let answer in q.qOptions) {
        options +=
            `
                <div class="option">
                        <span><b>${answer}</b>: ${q.qOptions[answer]}</span>
                    </div>
                `;

    }
    
    document.querySelector(".question-text").innerHTML = question;
    this.optionList.innerHTML = options;

    const optionss = this.optionList.querySelectorAll(".option");
    for (let opt of optionss) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.showQuestionNumber = function(questionQueue, totalQuestion){

    let tag = `<span class="badge bg-warning">${questionQueue}/${totalQuestion}</span>`;
    document.querySelector(".question-index").innerHTML = tag;
}

UI.prototype.showResult = function(countCorrect,totalQuestion){
    let tag = `${countCorrect} correct of total ${totalQuestion} question.`;
    document.querySelector(".score-box .score-text").innerHTML = tag;
}