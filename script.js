const input = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#checkTri");
const output = document.querySelector("#output");

function calculate(a1,a2,a3){
  return a1+a2+a3;
}

function isTriangle(){
  const total = calculate(Number(input[0].value),Number(input[1].value),Number(input[2].value));
  if(total === 180){
    output.innerText = "Its a triangle";
  }else{
    output.innerText = "Its not a triangle"
  }
}

btnCheck.addEventListener('click', isTriangle)

////////////////////////////////////////////////////////////

const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const finalScore = document.querySelector("#output-score");
const answers = ["90°","right angled"]
function checkAnswers(){
  let score = 0;
  let index = 0;
    const data = new FormData(quizForm);

for (let element of data.values()) {
  if(element === answers[index]){
    score = score  + 1;
  }
  index= index+1;

}  finalScore.innerText = "Your Score is " +score;

}

btnSubmit.addEventListener('click',checkAnswers);

////////////////////////////////////////
const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const btnCalc = document.querySelector("#calculate");
const finalResult = document.querySelector("#final-score");

function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

function getOutput(){
    finalResult.innerText  = `${calcHypotenuse(Number(sideA.value),Number(sideB.value))} is the Hypotenuse`
    
}

btnCalc.addEventListener('click',getOutput);

////////////////////////////////////////
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btnCalcArea = document.querySelector("#calculateArea");
const finalArea = document.querySelector("#finalArea");

function calcArea(a, b) {
  return (1/2*(a*b));
}

function getArea(){
    finalArea.innerText  = `${calcArea(Number(base.value),Number(height.value))} is the Final Area`
    
}

btnCalcArea.addEventListener('click',getArea);