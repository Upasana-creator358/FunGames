// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");


// btn.addEventListener("click" , function() {
//     let item = document.createElement("li");
//     let delBtn = document.createElement("button");
//     delBtn.classList.add("delete");
//     delBtn.innerText = "Delete";
   
//     item.innerText = inp.value;
//     ul.appendChild(item);
//     if(item.value == "") {
//         console.log("There is no task added");
//     }else {
//         item.appendChild(delBtn);
//     }
   
//     inp.value = "";
// })


// ul.addEventListener("click" , function(event) {
// //    console.dir(event.target.nodeName);
//     if(event.target.nodeName == "BUTTON") {
//         // console.log("delete");
//         let para = event.target.parentElement;
//         para.remove();
//     } else {
//         console.log("don't delete");
//     }
// })


let gameSeq = [];
let userSeq = [];
let randBtn = ["blue" , "pink" , "green" , "red"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("The game has started");
        started = true;
        levelUp();

    }
 

});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`
    let RanBtn = Math.floor(Math.random() * 3) + 1;
    let randIdx = randBtn[RanBtn];
    let randColor = document.querySelector(`.${randIdx}`);
   
  
    gameSeq.push(randIdx);
    console.log(gameSeq);
    btnFlash(randColor);
    
}

function checkLevel(idx) {
//  console.log("check level : " + level)
if(userSeq[idx] == gameSeq[idx]) {
    // console.log("They both are equal");
if(userSeq.length == gameSeq.length) {
       setTimeout(levelUp, 1000);
}
} else {
    h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
    document.querySelector("body").style.backgroundColor = "white";
    }, 250)
    reset();
}
}

function reset() {
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
   
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id"); //we acquired the id of the button, when usser press 
    console.log(userColor);
    userSeq.push(userColor);
   
    checkLevel(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn1");
//User is pressing the button now, the game has began, the user will press the same button that was flash last time 
for(btn of allBtns) {
btn.addEventListener("click" , btnPress);
}
//Buttonpress working

//i might not be able, it's really difficult and then it's actually misconfusing 
