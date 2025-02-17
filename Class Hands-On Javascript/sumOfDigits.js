function sumOfDigits(num){
    let sum = 0;
    let temp = num;
    while(temp>0){
        sum += temp%10;
        temp = Math.floor(temp/10);
    }
    console.log(sum);
    if(sum%2==0){
        console.log("Sum is even");
    }
    else{
        console.log("Sum is odd");
    }
}
sumOfDigits(45);
