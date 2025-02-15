var score= prompt("Enter the mark: ");
score = Number(score);
if(score == 100){
    console.log("Phenomenal!!!");
}else if(score>85){
    console.log("Excellent!");
}else if (score >= 71 && score <= 85) {
    console.log("Good work!");
} else if (score >= 51 && score <= 70) {
    console.log("Practice well!");
} else {
    console.log("Hard work is needed");
}
