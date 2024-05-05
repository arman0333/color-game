const colorCodeContainer = document.getElementById('color-code');
const optionContainer = document.getElementById('options-container');
let scoreContainer =  document.getElementById('score');
let randomColor = null ;
let score = 0;
function generateRandomColors(){
    
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
   
    // console.log(`rgb(${red},${blue},${green})`);
  return `rgb(${red},${blue},${green})`;


};
function increament(){
    score += 1;
   scoreContainer.innerHTML = `Score:${score}`;
}

function validResult(el) {
    let selectedColor = el.target.style.backgroundColor;
    // Remove spaces from both randomColor and selectedColor for comparison
    let strippedRandomColor = randomColor.replace(/\s/g, '');
    let strippedSelectedColor = selectedColor.replace(/\s/g, '');
    if(strippedSelectedColor === strippedRandomColor){
        increament();

    }
    else {
        score = 0;
    }
    window.localStorage.setItem("score",score);
    startGame();
}


// 
function startGame() {
    score = Number(window.localStorage.getItem('score') ?? 0);
    scoreContainer.innerHTML = score;
    randomColor = generateRandomColors();
    colorCodeContainer.innerHTML = randomColor;

    const index = Math.floor(Math.random() * 60);
    console.log(index);

    // Clear the optionContainer before adding new options
    optionContainer.innerHTML = '';

    for (let i = 0; i < 60; i++) {
        const div = document.createElement("div");
        if(i==index){
            div.style.backgroundColor = randomColor;
        }
        else{
            div.style.backgroundColor = generateRandomColors();
        }
        div.addEventListener("click", validResult);
        optionContainer.appendChild(div);
    }
}




window.addEventListener("load",()=>startGame());