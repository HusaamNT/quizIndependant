const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");
const startOption = document.getElementById("start");
const startButtons = document.getElementsByClassName("startButtons");

$(button1).hide();
$(button2).hide();
$(button3).hide();
$(button4).hide();

class Question {
  constructor(questionString, answer) {
    this.questionString = questionString;
    this.answer = answer;
  }
}

class Button {
  constructor(option) {
    this.option = option;
  }
}
class Button1 extends Button {
  constructor(option) {
    super(option);
    this.id = "b1";
  }
}
class Button2 extends Button {
  constructor(option) {
    super(option);
    this.id = "b2";
  }
}
class Button3 extends Button {
  constructor(option) {
    super(option);
    this.id = "b3";
  }
}
class Button4 extends Button {
  constructor(option) {
    super(option);
    this.id = "b4";
  }
}

const question1 = new Question("Which option isn't a data type?", "b2");
const question2 = new Question(
  "Which option is a popular programming language?",
  "b3"
);
const question3 = new Question(
  "Which of these examples aren't a type of for-loop?",
  "b1"
);
const question4 = new Question("What is recursion?", "b4");


const b1_1 =  new Button1("String");
const b1_2 =  new Button1("BananaPeel v3.1");
const b1_3 =  new Button1("for(each one from all)");
const b1_4 =  new Button1("A pregramming language");


const b2_1 =  new Button1("Word");
const b2_2 =  new Button1("King Cobra");
const b2_3 =  new Button1("for(i=0, i<source, i++)");
const b2_4 =  new Button1("A preogramming language");


  const b3_1 =  new Button1("Integer");
  const b3_2 =  new Button1("Python");
  const b3_3 =  new Button1("for(each element of source)");
  const b3_4 =  new Button1("A preogramming language");


  const b4_1 = new Button1("Character");
  const b4_2 =  new Button1("Tarantula");
  const b4_3 = new Button1("for(let element in source)");
  const b4_4 = new Button1("A preogramming language");


setUpQuestion1 = () => {
  
  JSON.stringify(button1List)
  console.log(typeof button1List)
  button1.innerHTML = button1List[1]
}
setUpQuestion1()
const startGame = function() {
  $(startButtons).hide();
  $(button1).show();
  $(button2).show();
  $(button3).show();
  $(button4).show();
  ;
}

startOption.addEventListener("click", startGame)
