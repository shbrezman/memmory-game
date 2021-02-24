numArr = [1,2,3,4,5,6,1,2,3,4,5,6];
numArr = shuffle(numArr);
const scoreT = document.getElementById(`score`);
const clicks = document.getElementById(`clicks`);
const sec = document.getElementById(`seconds`);
const min = document.getElementById(`minutes`);
const gameBody = document.getElementById('game-body');
secCount =  0;
minCount =  0;
start = false;
//initial game variables

isActive = false;
tempValue = '';
tempCell = '';
score = 0;
clickCount = 0;



for (let i = 0; i < 12 ;i++) {
    gameBody.innerHTML += `<img class="m-2" src="blank.png" id="${i}" onClick="clicka(this.id)" disabled>`;
   
}

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }


function clicka(e){

    if(start === false){
      start = true;
      

        setInterval(() => {
            min.innerText = `${minCount}`;
            sec.innerText = `${secCount}`;
            secCount++;
            if(secCount === 59){
                secCount = 0;
                minCount++;
                min.innerText = `${minCount}`;
            }
            
        }, 1000);
    }
    
    
    clickCount++;
    clicks.innerText =`Clicks: ${clickCount}` ;
    const gameCube = document.getElementById(`${e}`);
    gameCube.src = `${numArr[parseInt(e)]}.png`;

    if(!isActive){
        tempCell = e;
        tempValue = numArr[parseInt(e)];
        
    }else{
        gameBody.style.pointerEvents = 'none';
        if(numArr[parseInt(e)] == tempValue){
            score++;
            scoreT.innerText =`score: ${score}` ;
            document.getElementById(`${tempCell}`).onclick = false;
            document.getElementById(`${e}`).onclick = false;
            gameBody.style.pointerEvents = 'auto';
           
        }else{
            
            setTimeout(() => {
                gameCube.src = "blank.png";
                document.getElementById(`${tempCell}`).src = "blank.png";
                gameBody.style.pointerEvents = 'auto';
            }, 1000);
           
        }
        

    }
    isActive = !isActive;

    if(score == numArr.length){
        console.log("aaaa")
    }

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function restart(){
    
    window.location.reload();
    
}



