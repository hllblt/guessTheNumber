const randomNumber = Math.ceil(Math.random()*100);
// console.log(randomNumber);
let guessedNumber;
let lifes = 7;

do{
    guessedNumber = prompt("Enter you guessing number: ");
    if(guessedNumber > randomNumber){
        document.getElementById("direction").innerHTML = "π½π½";
        lifes --;   
    }
    else if(guessedNumber < randomNumber){
        document.getElementById("direction").innerHTML = "πΌπΌ";
        lifes --
    }
    else{
        document.getElementById("direction").innerHTML = `πππ§‘  ${randomNumber}  πππ`;
    }
    document.querySelector("h1").innerHTML = guessedNumber;

}
while(guessedNumber != randomNumber && lifes != 0)

if(lifes > 0){document.querySelector("h1").innerHTML = "πππ";
}
else{document.querySelector("h1").innerHTML = "πππ";}
console.log(randomNumber);
