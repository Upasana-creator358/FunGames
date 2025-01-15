//Step 1 : Click the button to start the game 

//BUtton is clicked the h1 - innertext will change and it shows - to begin the game // also when i start the game- the 
// let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// let stone = document.querySelector("#stone");
// let paper = document.querySelector("#aper");
// let scissor = document.querySelector("#scissor");



// btn.addEventListener("click" , function dbl() { 
//     console.log("The button was clicked");
//     btn.classList.add("btn3");
//     setTimeout(function() {
//         btn.classList.remove("btn3");
//       }, 1000);
//       let level = 1;
//       h3.innerText = `Score ${level}`;
      
//       levelUp();
// });


//Second step is to work on my conditions, where i will be getting, this is going to be a function 

// function levelUp() {
//     //Clickable all the keys should within their id, they should get me in the console.log
//    stone.addEventListener("click" , function() {
//    stone.classList.add("stone1");
//    setTimeout(function() {
//     stone.classList.remove("stone1")
//    }, 500);
//    })
// //

// }


const choices = document.querySelectorAll(".img1");
const h3 = document.querySelector("h3");
let scoreBoard = document.querySelector(".userScore");
let compScoreB = document.querySelector(".compScore");
let userScore = 0;
let compScore = 0;
//iterating throught all the choices - stone paper scissor 

//generating computer's choice 
const genComputerChoice = () => {
    let choices = ["stone" , "paper" , "scissors"];
    let genChoices = Math.floor(Math.random() * 3);
    let getChoice = choices[genChoices];
    return getChoice;
}

//draw game function that will print on the 
let drawGame = () => {
    console.log("The game is draw");
    h3.innerText = "The game was draw!"
}
//score updation 

//If userWin 
const showWinner = (userWin, userChoice, compChoice) => {
if(userWin) {
    console.log("You win!");
    h3.innerText = `You won! Your choice ${userChoice} beat the computer's choice ${compChoice}`;
    h3.style.backgroundColor = "green";
    setTimeout(function() {
        h3.style.backgroundColor = "black"
    }, 1000);
   
   scoreBoard.innerText = ++userScore;

} else {
    console.log("You lose!");
    h3.innerText = `Computer won! Computer's choice ${compChoice} beat your choice ${userChoice}`;
    h3.style.backgroundColor = "red";
    setTimeout(function() {
        h3.style.backgroundColor = "black"
    }, 1000);

    compScoreB.innerText =++compScore;
} 


}

const playgame = (userChoice) => {
 console.log("user choice = ", userChoice);
 //generate computer choice 
 const compChoice = genComputerChoice();
 console.log("comp choice =", compChoice);
 
 //Conditions of winning or lose 
if(userChoice === compChoice) {
    drawGame();
}else {
    let userWin = true;
    if(userChoice == "stone") {
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        userWin = compChoice  === "scissors" ? false : true; //what kind of fasle true it is 
    } else {
        userWin = compChoice === "stone" ? false : true; 
    
}
    showWinner(userWin , userChoice , compChoice);
} 
 

}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
 
    let userChoice = choice.getAttribute("id");
   
    playgame(userChoice); //passsing the function call 

    });
});