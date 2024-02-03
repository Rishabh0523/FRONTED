// let user = prompt("Enter S, W or G ")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S" , "W","G"] [cpuI]

// const match = (cpu ,user) =>{
//     if(cpu===user) {
//         return "No body"
//     }
//     else if(cpu === "S" && user === "W"){
//         return "user"
//     } 
//     else if(cpu === "S" && user === "G"){
//         return "user"
//     } 
//     else if(cpu==="G" && user ==="W"){
//         return "user"
//     }
//     else if(cpu==="G" && user ==="S"){
//         return "user"
//     }
//     else if(cpu==="W" && user ==="G"){
//         return "cpu"
//     }
  
// }
// let result = match(cpu,user)
// document.write("The winner is " + result);


// script.js
const snakeButton = document.getElementById("snake");
const waterButton = document.getElementById("water");
const resultText = document.getElementById("result-text");

function getRandomChoice() {
    const choices = ["Snake", "Water"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getRandomChoice();

    if (userChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (userChoice === "Snake" && computerChoice === "Water") ||
        (userChoice === "Water" && computerChoice === "Snake")
    ) {
        resultText.textContent = `You win! Computer chose ${computerChoice}`;
    } else {
        resultText.textContent = `Computer wins! Computer chose ${computerChoice}`;
    }
}

snakeButton.addEventListener("click", () => playGame("Snake"));
waterButton.addEventListener("click", () => playGame("Water"));

