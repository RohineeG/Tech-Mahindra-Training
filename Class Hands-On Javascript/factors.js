function factors(num){
    console.log("Factors: \n");
    let i = 1;
    for(i=1; i<=num; i++){
        if(num%i == 0){
            console.log(i);
        }
    }
}

let number = prompt("Enter the number: ");
factors(number);
