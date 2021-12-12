const btnWrap = document.querySelector(".btn-wrapper");
const buttons = document.querySelectorAll("button");
let playerChoise;
let pcChoise;
let pcScore = 0;
let playerScore = 0;
let noneScore = 0;

const roundResults = document.querySelector(".roundResults")
const scorePC = document.querySelector(".pcScore")
const scorePl = document.querySelector(".playerScore")



btnWrap.addEventListener("click", (event) => {
    if (event.target.classList.contains('btn')) {
        playerChoise = event.target.getAttribute('data-str');
        changeScore(gameRound());
     }
   
}) 

function changeScore(result) {
    roundResults.innerHTML = `${result}`;
    scorePC.innerHTML = `Компьтер - ${pcScore}`;
    scorePl.innerHTML = `Игрок - ${playerScore}`;
    whoWinner();
}

function whoWinner() {
    if (playerScore > pcScore) {
        scorePC.classList.remove("winner")
        scorePl.classList.add("winner")
    } else if (playerScore < pcScore) {
        scorePC.classList.add("winner")
        scorePl.classList.remove("winner")
    } else {
        scorePC.classList.remove("winner")
        scorePl.classList.remove("winner")

    }
}


function gameRound() {
    pcPlay()
   
    
    if (playerChoise === pcChoise) {
        roundResult = "Ничья";
        ++noneScore;

    } else {
        switch (playerChoise) {
            case "камень":
                if (pcChoise === "ножницы") {
                    roundResult = "Победа Игрока"
                    playerScore++
                } else {roundResult = "Победа ПК"
                    pcScore++}              
                break;
            case "ножницы":
            if (pcChoise === "бумага") {
                    roundResult = "Победа Игрока"
                    playerScore++
                } else {roundResult = "Победа ПК"
                    pcScore++}  
                break;
            case "бумага":
            if (pcChoise === "камень") {
                    roundResult = "Победа Игрока"
                    playerScore++
                } else {roundResult = "Победа ПК"
                    pcScore++}  
                break;
        }

    }
    return roundResult;
    }

function pcPlay() {
    switch (getRandomNumber()) {
        case 1:
        pcChoise = 'камень'
            break;
        case 2:
        pcChoise = 'ножницы'
            break;
        case 3:
        pcChoise = 'бумага'
            break;
       }

}



function getRandomNumber() {
   return Math.round(Math.random()*3+0.5)
}

function dosmth() {
    console.log("Ups, something doing...");
    console.log(playerChoise, pcChoise);
}
