function Question(qName, qOptions, qCorrectOpt) {
    this.qName = qName;
    this.qOptions = qOptions;
    this.qCorrectOpt = qCorrectOpt;
}
Question.prototype.checkAns = function (ans) {
    return ans === this.qCorrectOpt
}
let questions = [
    new Question("1 - Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Question("2 - Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Question("3 - Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Question("4 - Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
]