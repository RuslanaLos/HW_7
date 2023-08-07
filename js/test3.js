let num = parseInt(prompt("Введіть ціле число."));
for (let i = 1; i <= 100; i++){
    let result = i * i;
    if (result <= num){
        console.log(i);
    }
}