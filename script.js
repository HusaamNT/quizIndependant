const button1 = $("#option1");
const button2 = $("#option2");
const button3 = $("#option3");
const button4 = $("#option4");

class Question{
  constructor(questionString, answer){
      this.questionString = questionString;
      this.answer = answer;
  }
}

class Button{
  constructor(option, id){
    this.option = option;
    this.id = id;
  }
}
class Button1 extends Button{
  constructor(option){
    super(option, id);
    this.id = "b1";
  }
}
class Button2 extends Button{
  constructor(option){
    super(option, id);
    this.id = "b2";
  }
}
class Button3 extends Button{
  constructor(option){
    super(option, id);
    this.id = "b3";
  }
}
class Button4 extends Button{
  constructor(option){
    super(option, id);
    this.id = "b4";
  }
}

const questions1 = new Question(
  "What does CSS stand for?",

  
);

console.log(questions1)