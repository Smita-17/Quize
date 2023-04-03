const quizeDB =[
{
   question:"Q1 What color does yellow and green make?",
   a:"Lime",	
   b:"Ocean mist",
   c:"Maroon",	
   d:"Tangerine",
   ans: "ans1"
},

   {
   question:"Q2 Ms world is the example of",
   a:"An operating system",
   b:"A processing device",
   c: "Application software",
   d: " An input device",
   ans:"ans3"
   },

   {
    question:"Q3 Ctrl, Shift and Alt are called .......... keys.",
    a:"modifier",
    b:"function",
    c:"alphanumeric",
    d:"adjustment",
    ans:"ans1"
    },
 {
    question:"Q4 What is the next number in the given Number Series? 5, 24, 94, 279, ?",
    a:"587",
    b:"554",
    c:"489",
    d:"499",
    ans:"ans2"
    },
{
    question:"Q5 The tropic of cancer does not pass through which of these Indian states?",
    a:"Madhya Pradesh",
    b:"West Bengal",
    c:"Rajasthan",
    d:"Odisha",
    ans:"ans4"
    },

    {
    question:"Q6 Which one is the smallest ocean in the world",
    a:"Indian",
    b:"Pacific",
    c:"Atlantic",
    d:"Arctic",
    ans:"ans4"
    },

 {
    question:"Q7 Which country gifted the 'Statue of Liberty' to USA in 1886",
    a:"France",
    b:"Canada",
    c:"Brazil",
    d:"England",
    ans:"ans1"
 },

 {
    question:"Q8 Dead sea is loacted in which two countries",
    a:"Jordan and sudan",
    b:"Jordan and israel",
    c:" Turkey and UAE",
    d:"UAE and egypt",
    ans:"ans2"
    },
    
{
    question:"Q9 Which country is known as the 'playground of Europe",
    a:"Australia",
    b:"Holland",
    c:"Switzerland",
    d:"Italy",
    ans:"ans3"
    },

{
    question:"Q10 Gandhi Peace Prize for the year 2000 was awarded to the former President of South Africa along with",
    a:"Sathish Dawan",
    b:"C. Subramanian",
    c:"Grameen Bank of Bangladesh",
    d:"World Healt Organisation",
    ans:"ans3"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizeDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}


loadQuestion();
  
const getCheckedAnswer = () => {
    let answer;

      answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
          answer = curAnsElem.id;
       }
    });
    return answer;
};
const deselectAll = () =>{
   answers.forEach((curAnsElem) => curAnsElem.checked - false);
}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizeDB[questionCount].ans) {
        score++;
    };
    
    questionCount++;

    deselectAll();

    if(questionCount < quizeDB.length){
        loadQuestion();
    }else{
     showscore.innerHTML = `
     <h3> you scored ${score}/${quizeDB.length}🏆</h3>
     <button class="btn" oneclick="location.reload()"> Play Again </button>
     `;
     showscore.classList.remove('scoreArea');
    }
});

























