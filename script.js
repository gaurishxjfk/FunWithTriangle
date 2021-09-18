  const menu1 = document.querySelector("#IsItTriangle");
  const menu2 = document.querySelector("#quizTriangle");
  const menu3 = document.querySelector("#hypotaneus");
  const menu4 = document.querySelector("#area");

  const submenu1 = document.querySelector("#submenu1");
  const submenu2 = document.querySelector("#submenu2");
  const submenu3 = document.querySelector("#submenu3");
  const submenu4 = document.querySelector("#submenu4");

  submenu1.classList.add("active");
  submenu2.classList.remove("active");
  submenu3.classList.remove("active");
  submenu4.classList.remove("active");
  menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";

  submenu1.addEventListener('click',() => {
    submenu1.classList.add("active");
  submenu2.classList.remove("active");
  submenu3.classList.remove("active");
  submenu4.classList.remove("active");
    menu1.style.display = "block";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
  });

  submenu2.addEventListener('click',() => {
    submenu1.classList.remove("active");
  submenu2.classList.add("active");
  submenu3.classList.remove("active");
  submenu4.classList.remove("active");
    menu1.style.display = "none";
    menu2.style.display = "block";
    menu3.style.display = "none";
    menu4.style.display = "none";
  });

  submenu3.addEventListener('click',() => {
    submenu1.classList.remove("active");
  submenu2.classList.remove("active");
  submenu3.classList.add("active");
  submenu4.classList.remove("active");
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "block";
    menu4.style.display = "none";
  });

  submenu4.addEventListener('click',() => {
    submenu1.classList.remove("active");
  submenu2.classList.remove("active");
  submenu3.classList.remove("active");
  submenu4.classList.add("active");
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "block";
  });



  //////////////////////////////////////////
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

