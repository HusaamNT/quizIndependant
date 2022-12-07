class Question{
  constructor(questionString, answer){
      this.questionString = questionString;
      this.answer = answer;
  }
}

class Button{
  constructor(answer, id){
    this.answer = answer;
    this.id = id;
  }
}

const button1 = $("#option1");
const button2 = $("#option2");
const button3 = $("#option3");
const button4 = $("#option4");

const questions1 = new Question(
  "What does CSS stand for?",
  "Creative Style Sheet",
  "Cascading Style Sheet",
  "Creative Sheet Style",
  "Concordant Style Shape",
  this.button2,
  
);

console.log(questions1)