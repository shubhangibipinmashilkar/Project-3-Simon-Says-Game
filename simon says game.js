gameSeq=[];
userSeq=[];

let level=0;
let btnColorsArr=["red","yellow","green","blue"];
let started=false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("GAME IS STARTED !!");
        started=true;

        levelUp();
    }
})
function flashButton(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level- ${level}`;
let randomBtnIdx = Math.floor(Math.random()*3);
let randomBtnColor = btnColorsArr[randomBtnIdx];
let randomBtn = document.querySelector(`.${randomBtnColor}`);
gameSeq.push(randomBtnColor);
console.log(gameSeq);
// console.log(randomBtnIdx);
// console.log(randomBtnColor);
// console.log(randomBtn);

    flashButton(randomBtn);
}
function checkAns(idx){
// console.log("current level",level);
// let idx = level-1;
if(gameSeq[idx]===userSeq[idx])
{
    if(gameSeq.length==userSeq.length)
    {
        setTimeout(levelUp,1000);
    }
}else{
    let body = document.querySelector("body");
    body.classList.add("errorFlash");
    setTimeout(()=>{
        body.classList.remove("errorFlash");
    },150);
    // console.log(`${level}`);
    h2.innerHTML=`Game over!! Press any key to start again.. Your Score is <b>${level}</b>`;
       
    reset();
    let h2New = document.createElement("h2");
    h2.append(h2New);
    h2New.innerText = "Level 0";
    
}
}


function btnPress(){
    let btnPressed = this;
    flashButton(btnPressed);
    
    let userColor=btnPressed.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let btnAll = document.querySelectorAll(".btn");
for(eachBtn of btnAll)
{
    eachBtn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    started=false;
    userSeq=[];
    gameSeq=[];
    // h2.innerText="Let's play again!! Press any key to start..";
}