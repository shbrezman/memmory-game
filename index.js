imgArr = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
]

numArr1 = [];
numArr2 = [];

for (let i = 0; i < 12; i++) {
    numArr1[i] = i;
}
console.log(numArr1);

for (let i = 0; i < 12; i++) {
    numArr2[i] = Math.floor(Math.random() * 7);
}
console.log(numArr2);


//initial game variables



const gameBody = document.getElementById('game-body');

for (let i = 0; i < 12 ;i++) {
    gameBody.innerHTML += `<img class="m-2" src="${imgArr[0]}" id="${i}" onClick="clicka(this.id)">`;
   
}

function clicka(e){
    console.log(e);
}







