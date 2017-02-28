function getQuestions() {
  var questions = [{
    question: '2+2',
    answers: [{
      id: 1,
      text: '1'
    }, {
      id: 2,
      text: '2'
    }, {
      id: 3,
      text: '4'
    }],
    answer: {
      id: 3
    }
  }, {
    question: '2+3',
    answers: [{
      id: 1,
      text: '1'
    }, {
      id: 2,
      text: '5'
    }, {
      id: 3,
      text: '4'
    }],
    answer: {
      id: 2
    }
  }, {
    question: '2+1',
    answers: [{
      id: 1,
      text: '3'
    }, {
      id: 2,
      text: '2'
    }, {
      id: 3,
      text: '4'
    }],
    answer: {
      id: 1
    }
  }]
  return questions;
}
