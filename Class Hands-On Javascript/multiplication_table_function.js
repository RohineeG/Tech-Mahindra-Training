function multiplicationTable() {
    let number = 15;  
    let limit = 8;  
    console.log(`Multiplication Table of ${number} up to ${limit}:`);
    let i = 1;
    while (i <= limit) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    }
}
multiplicationTable();
