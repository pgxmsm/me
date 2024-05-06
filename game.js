let comp = [];
let userIn = [];
let colors = ['red', 'yellow', 'green', "blue"];
let level = 0;


let playing = false;

let playBtn = document.querySelector(".play-btn");
let textS = document.querySelector(".level");
let overTxt = document.querySelector(".over");

playBtn.addEventListener('click', ()=>{
    overTxt.innerText = ``;
    playing = true;
    level++;
    textS.innerText = `Level ${level} `;
    textS.style.visibility = "visible";
    ran();
    playBtn.style.visibility = "hidden";
});

// written by @pgxMSM

function flash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
    // console.log(comp)
};


function ran(){
    let n = Math.floor(Math.random()*4); 
    let randCol = colors[n];
    comp.push(randCol);
let randBtn = document.querySelector(`.${randCol}`);
//    console.log(randBtn);
   flash(randBtn)
};

function levelup(){
    level++;
    textS.innerText = `Level ${level} `;
    ran();
    userIn=[];
    
}
// ran();

function match(idx){
    // let idx = level -1;
    if(userIn[idx]==comp[idx]){
       
        if(userIn.length == comp.length){
            levelup();
        };
    
    }
    else{
        let score = 0;
        if(level>1){score=level-1};
        if(level>=1){
        console.log('game over')
        gameOver(score)};
    }
};

let allbtn = document.querySelectorAll(".btns");

// if (playing!=false){};



for( btn of allbtn){
   btn.addEventListener('click', (e)=>{
    userIn.push(e.target.innerText);
    // console.log(userIn);
   match(userIn.length-1); 
   });
};



function gameOver(score){
    overTxt.innerText = `Game Over ⚔ Scores: ${score} `;
    playing = false;
    document.querySelector("body").style.background = "red";
    setTimeout(() => {
    document.querySelector("body").style.background = "rgb(255, 216, 216)";
    }, 230);
    setTimeout(() => {
        gameReset();
    }, 240);
    
    
}

function gameReset(){
    textS.innerHTML = `Press <Span>_</Span> To Start Game.`;
    userIn =[];
    comp = [];
    playBtn.style.visibility = "visible";
    level = 0;

}




