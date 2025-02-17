const student = {
    id : 1,
    name : "Rohinee",
    department : "CSE",
    college : "PIT",
    email : "rohinee@gmail.com",
    displayDetails: function(){
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`College: ${this.college}`);
        console.log(`Email: ${this.email}`);
    }, 
    displayThreeDetails: function(){
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Deaprtment: ${this.department}`);
    }
};
console.log("Details: \n");
student.displayDetails();

student.address = {
    doorNo : "210",
    street : "Main Road",
    area : "Maduravoyal",
    pincode : "600095"
};

student.displayAddress = function(){
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`College: ${this.college}`);
    console.log(`Email: ${this.email}`);
    console.log(`Door Number: ${this.address.doorNo}`);
    console.log(`Street: ${this.address.street}`);
    console.log(`Area: ${this.address.area}`);
    console.log(`Pincode: ${this.address.pincode}`);
};

console.log("All the details of the students with the address: \n");
student.displayAddress();

console.log("Basic Details: \n");
student.displayThreeDetails();

delete student.email;
delete student.displayThreeDetails;

console.log("Student details after deletion: \n");
console.log(student);
