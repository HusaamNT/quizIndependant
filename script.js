const buttons = [1, 2, 3, 4].map(it => document.getElementById(`option${it}`))

/*
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");
*/

const startOption = document.getElementById("start");
const startButtons = document.getElementsByClassName("startButtons");
const allOptionButton = document.getElementsByClassName("optionButtons");
const gameSettings = document.getElementsByClassName("gameSettings");
const retry = document.getElementById("retry");
const questionTag = document.getElementById("question");

buttons.forEach(it => $(it).hide())
/*
$(button1).hide();
$(button2).hide();
$(button3).hide();
$(button4).hide();
*/

$(retry).hide();
$(gameSettings).hide();

const questions = [{
    question:"Which option isn't a data type?",
    options:["Script", "Word", "Integer", "Character"],
    answer:"Word"
},
{
    question:"Which option is a popular programming language?",
    options:["BananaPeel v3.1", "King Cobra", "Python", "Tarantula"],
    answer:"Python"
},
{
    question:"Which of these examples aren't a type of for-loop?",
    options:["for(each one from all)", "for(i=0, i<source, i++)", "for(each element of source)", "for(let element in source)"],
    answer:"Word"
},
{
    question:"What is recursion?",
    options:["A prgramming language", "Word", "Integer", "Character"],
    answer:"Word"
}]

//console.log(questions[1].options[1]);
let score = 0
let n = 0;
console.log(typeof questions[n].options[0])
console.log(questions[n].options[3])

setUpQuestion = () =>{
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = questions[n].options[i];
    questionTag.innerHTML = questions[n].question
  }
    /*
  button1.innerHTML = questions[n].options[0]
  button2.innerHTML = questions[n].options[1]
  button3.innerHTML = questions[n].options[2]
  button4.innerHTML = questions[n].options[3]
    */
};

gameStart = () =>{
    console.log('game start n', n)
    buttons.forEach(it => $(it).show())
    /*
    $(button1).show();
    $(button2).show();
    $(button3).show();
    $(button4).show();
    */
    $(gameSettings).show();
    $(startOption).hide();
    setUpQuestion();
};

startOption.addEventListener("click", gameStart);

checkButton = (input) =>{
    if (questions[n].answer === input){
        ++score;
    }
    ++n;
    setUpQuestion();

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => checkButton(questions[n].options[i]))
}
/*
button1.addEventListener("click", () => checkButton(questions[n].options[0]));
button2.addEventListener("click", () => checkButton(questions[n].options[1]));
button3.addEventListener("click", () => checkButton(questions[n].options[2]));
button4.addEventListener("click", () => checkButton(questions[n].options[3]));
*/