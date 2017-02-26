(function() {
    window.addEventListener("load", function load(event) {
        main();
    }, false);
})();

function main() {
    var $quiz = document.getElementById('quiz');
    var QUIZ = quizModule();
    QUIZ.create($quiz, getQuestions());
}

function quizModule() {
    var QI = questionItem();
    var questions = [];
    var $questionItems = [];
    var $root

    function create(root, obj) {
        $root = root;
        questions = obj;
        init();
    }

    function init() {
        console.log($root);
        console.log(questions);
        var newLi = document.createElement('li');
        for (var i = 0; i < questions.length; i++) {
            $questionItems.push(QI.create(questions[i]));
        }
        for (var i = 0; i < $questionItems.length; i++) {
            var newDiv = document.createElement('div');
            newDiv.innerHTML = $questionItems[i];
            newDiv.classList.add('quiz-item');
            newDiv.classList.add('display');
            document.getElementById('quiz').appendChild(newDiv);
        }
    }
    return {
        create: create
    };

}

function questionItem() {
    function create(obj) {
        var QUE_STR = '<div class="questions">' + obj.question;
        var ANSWERS_STR = '<ul class="answers">';
        var CHECK_STR='<li class="answer"><span class="answer-check"><span class="answer-check-inner"></span></span>'
        for (var i = 0; i < obj.answers.length; i++) {
          obj.answers[i];
          ANSWERS_STR+=CHECK_STR+'<span class="answer-text">'+          obj.answers[i].text+'</span></li>'
        }
        return QUE_STR + ANSWERS_STR + '</ul></div>'
    }
    return {
        create: create
    };
}
