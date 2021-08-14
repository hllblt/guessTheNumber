const randomNumber = Math.ceil(Math.random()*100);
// console.log(randomNumber);
let guessedNumber;
let lifes = 7;

do{
    guessedNumber = prompt("Enter you guessing number: ");
    if(guessedNumber > randomNumber){
        document.getElementById("direction").innerHTML = "🔽🔽";
        lifes --;   
    }
    else if(guessedNumber < randomNumber){
        document.getElementById("direction").innerHTML = "🔼🔼";
        lifes --
    }
    else{
        document.getElementById("direction").innerHTML = `💚💛🧡  ${randomNumber}  💙💖💜`;
    }
    document.querySelector("h1").innerHTML = guessedNumber;

}
while(guessedNumber != randomNumber && lifes != 0)

if(lifes > 0){document.querySelector("h1").innerHTML = "🍕🍕🍕";
}
else{document.querySelector("h1").innerHTML = "💔💔💔";}
console.log(randomNumber);
