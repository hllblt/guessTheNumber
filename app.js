const randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
let guessedNumber;
let lifes = 7;
guessedNumber = document.getElementById("guess").value;
// console.log(guessedNumber);
let buttonGuess = document.querySelector("button");
let lives = document.getElementById("lives");;
let lasttry = document.getElementById("lasttry");

const tahmin = () =>{
    
    guessedNumber = document.getElementById("guess").value;
    // console.log(guessedNumber);
    if(guessedNumber > 100){
        document.getElementById("direction").innerHTML = "Hatalı değer girdiniz!";
        lifes --;
    }    
    else if(guessedNumber < 0){
        document.getElementById("direction").innerHTML = "Hatalı değer girdiniz!";
        lifes --;
    }    
    else if(guessedNumber > randomNumber){
        document.getElementById("direction").innerHTML = "🔻🔻🔻🔻🔻";
        lifes --;
        lasttry.innerHTML = guessedNumber;
    }
    else if(guessedNumber < randomNumber){
        document.getElementById("direction").innerHTML = "🔺🔺🔺🔺🔺";
        lifes --;
        lasttry.innerHTML = guessedNumber;
    }
    else{
        document.getElementById("direction").innerHTML = `💚💛🧡  ${randomNumber}  💙💖💜`;
        buttonGuess.removeEventListener("click",tahmin);
        document.getElementById("lasttried").innerHTML="";
        lasttry.innerHTML = "";
    }
    lives.innerHTML = "Lives: " + "💙".repeat(lifes) + "🤍".repeat(7-lifes);
    if(lifes === 0){
        buttonGuess.removeEventListener("click",tahmin);
        document.getElementById("direction").innerHTML = "PATLANGOÇ";
        lasttry.innerHTML = guessedNumber;
    }
}
buttonGuess.addEventListener("click", tahmin);