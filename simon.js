// Lets build a simon nam game ka ek online version
let gameSeq = [];
let userSeq = [];

let btns= ["yellow","red","purple","green"];

let started = false; // yeh hme btayega kee kya game start ho chuka hai..?
let level = 0; //track thelevelof the game

let h2 = document.querySelector("h2"); 

document.addEventListener("keypress", function() {
   if(started == false){
    console.log("game has started");
    started = true;

    levelUp();
   }
    
});

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   }, 250);
}

function levelUp() {
   userSeq = []; 
   level++;
   h2.innerText = `Level ${level}`;
  
   let randomIdx = Math.floor(Math.random() * 3); 
   let randomColor = btns[randomIdx];
   let randomBtn = document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
   gameFlash(randomBtn);

}

function checkAns(idx) {
   if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
         setTimeout(levelUp, 1000);
      }
   }
   else{
      h2.innerHTML = `game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
       document.querySelector("body").style.backgroundColor = "white";
      },200);
      reset();
   }
}

function btnPress() {
 //console.log(this);
 let btn = this;
 userFlash(btn);

 userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}