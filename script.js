const prompt = require("prompt-sync")();

console.log("Welcome to the Quiz")

let correctAnswer = 0;
const totalQuestions = 3;


const answer1 = prompt("What is captial of INDIA?")
const correctAnswer1 = "DELHI"
if(answer1.toUpperCase() === correctAnswer1){
    console.log("Correct")
    correctAnswer += 1;
}
else{
    console.log("Wrong")
}

const answer2 = prompt("Who is President of INDIA?")
const correctAnswer2 = "DROUPADI MURMU"
if(answer2.toUpperCase() === correctAnswer2){
    console.log("Correct")
    correctAnswer++;
}
else{
    console.log("Wrong")
}

const answer3 = prompt("WHat is the fullform of JS?")
const correctAnswer3 = "JAVASCRIPT"
if(answer3.toUpperCase() === correctAnswer3){
    console.log("Correct")
    correctAnswer++;
}
else{
    console.log("Wrong")
}
const score = Math.round((correctAnswer/totalQuestions)*100);
console.log("You've got",correctAnswer,"correct")
console.log("your score is",score.toString() + "%")