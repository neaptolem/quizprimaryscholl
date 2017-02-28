var d = document;

(function() {
  window.addEventListener("load", function load(event) {
    main();
  }, false);
})();

function main() {
  var $quiz = $('.quiz');
  var QUIZ = quizModule();
  QUIZ.create($quiz, getQuestions());
}

function quizModule() {
  var points = 0;
  var QI = questionItem();
  var questions = [];
  var $questionItems = [];
  var $root;
  var $answers = [];
  var $btns = [];
  var $active;

  function create(root, obj) {
    $root = root;
    questions = obj;
    init();
  }

  function init() {
    for (var i = 0; i < questions.length; i++) {
      $questionItems.push(QI.create(questions[i], i));
    }
    for (var i = 0; i < $questionItems.length; i++) {
      var newDiv = d.createElement('div');
      var id = d.createAttribute('id');
      id.value = idGenerator(i);
      newDiv.setAttributeNode(id);
      newDiv.innerHTML = $questionItems[i];
      newDiv.classList.add('quiz-item');
      d.getElementById('quiz').appendChild(newDiv);
    }
    displayQuestions(0);
    addEventListenerToLi();
    addEventListenerToBtn();
  }

  function addEventListenerToLi() {
    var str = '';
    for (var i = 0; i < $questionItems.length; i++) {
      str = '#' + idGenerator(i) + ' .answer';
      $answers.push($(str));
    }
    for (var i = 0; i < $answers.length; i++) {
      $answers[i].click(function(e) {
        var obj = $(this);
        obj.siblings().removeClass('checked');
        obj.addClass('checked');
      })
    }
  }

  function addEventListenerToBtn() {
    var str = '';
    for (var i = 0; i < $questionItems.length; i++) {
      str = '#' + idGenerator(i) + ' .btn-answer';
      $btns.push($(str));
    }
    for (var i = 0; i < $btns.length; i++) {
      $btns[i].click(function(e) {
        var obj = $(this);
        var idParent = obj.parent().attr('id');
        var str = '#' + idParent + ' .answer.checked';
        var checkedLi = $(str);
        if (checkedLi.length != 1) {
          return;
        }
        var index = checkedLi.parent().attr('data-info');
        var idAnswer = checkedLi.attr('data-info');
        var itemQ = questions[index];
        if (itemQ.answer.id == idAnswer) {
          console.log(true);
          points++;
        } else {
          console.log(false);
        }
        console.log($active);
        $active.removeClass('display');
        var num = +index;
        console.log('id', num, $btns.length);
        if (num + 1 == $btns.length) {
          var total = questions.length;
          $('#answer').html('Результат:' + points + '/' + total);
        } else {
          console.log(index + 1);
          displayQuestions(+index + 1);
        }
      });
    }
  }

  function displayQuestions(i) {
    var str = idGenerator(i);
    $active = $('#' + idGenerator(i));
    d.getElementById(str).classList.add('display');
  }

  function idGenerator(i) {
    return "quest_item_" + i;
  }
  return {
    create: create
  };

}

function questionItem() {
  function create(obj, data) {
    var QUE_STR = '<div class="questions">' + obj.question;
    var ANSWERS_STR = '<ul class="answers" data-info=' + data + '>';

    function CHECK_STR(id) {
      return '<li class="answer" data-info=' + id + '><span class="answer-check"><span class="answer-check-inner"></span></span>'
    }
    for (var i = 0; i < obj.answers.length; i++) {
      obj.answers[i];
      ANSWERS_STR += CHECK_STR(obj.answers[i].id) + '<span class="answer-text">' + obj.answers[i].text + '</span></li>'
    }
    var BTN_STR = '<div class="btn btn-answer"><span>Відповідь</span></div>'
    return QUE_STR + ANSWERS_STR + '</ul></div>' + BTN_STR;
  }
  return {
    create: create
  };
}
