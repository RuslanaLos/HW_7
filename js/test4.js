let num = parseInt(prompt("Введіть ціле число."));
let primeNum = true;
if (num <= 1){
    primeNum =  false;
} else {
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            primeNum = false;
            break;
        }
    }
}
if(primeNum) {
    console.log("Це просте число.");
}  else {
    console.log("Це не просте число.");
}