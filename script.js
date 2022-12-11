const button1 = $("#option1");
const button2 = $("#option2");
const button3 = $("#option3");
const button4 = $("#option4");
const startButtons = $(".startButtons")

$(button1).hide();
$(button2).hide();
$(button3).hide();
$(button4).hide();

class Question{
  constructor(questionString, answer){
      this.questionString = questionString;
      this.answer = answer;
  }
}

class Button{
  constructor(option){
    this.option = option;
  }
}
class Button1 extends Button{
  constructor(option){
    super(option);
    this.id = "b1";
  }
}
class Button2 extends Button{
  constructor(option){
    super(option);
    this.id = "b2";
  }
}
class Button3 extends Button{
  constructor(option){
    super(option);
    this.id = "b3";
  }
}
class Button4 extends Button{
  constructor(option){
    super(option);
    this.id = "b4";
  }
}

const question1 =  new Question("Which option isn't a data type?", "b2");
const question2 =  new Question("Which option is a popular programming language?", "b3");
const question3 =  new Question("Which of these examples aren't a type of for-loop?", "b1");
const question4 =  new Question("What is recursion?", "b4");

const button1List = [
  new Button1("String"),
  new Button1("BananaPeel v3.1"),
  new Button1("for(each one from all)"),
  new Button1("A pregramming language")
]
const button2List = [
  new Button1("Word"),
  new Button1("King Cobra"),
  new Button1("for(i=0, i<source, i++)"),
  new Button1("A preogramming language")
]
const button3List = [
  new Button1("Integer"),
  new Button1("Python"),
  new Button1("for(each element of source)"),
  new Button1("A preogramming language")
]
const button4List = [
  new Button1("Character"),
  new Button1("Tarantula"),
  new Button1("for(let element in source)"),
  new Button1("A preogramming language")
]

function startGame(){
  $(startButtons).hide();


}
addEventListener()