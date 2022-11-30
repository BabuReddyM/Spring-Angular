var name = "Bharath" // global variable since not inside any fun/operation
var age = 32;
var inGradate = true;
var laptop;
laptop = "Dell";
console.log(name);
console.log(name);
name = "Reddy";
console.log(name);
console.log(laptop);

// function alertUser() {
//     var favChips = "bingo" // this variable is defined and destroyed inside the function.
//     console.log("This user has logged in "+name);

//     alert("This user has logged in" + name)

// }
// alertUser( );
// //console.log(favChips);
// //if else if and else statements

// function operators(num){
//     if(num >20){
//         console.log("Number is greater than 20");
//     } else if(num ==20){
//         console.log("number is equal to 20");
//     }else{
//         console.log("number is smaller than 20")
//     }
// }

// operators(87);
function creditScore(score) {
    var creditScore;
    switch(score){
        case 800: creditLimit = "above 1 lac";
        break;
        case 700: creditLimit = "50,000 to 1.00.000";
        break;
        case 600 : creditLimit = "10,000 t0 25000";
        break;
        default: creditLimit="not eligible"
    }
    console.log(creditLimit);
}
creditScore(800);
//conventional Method
function counting(){
    for(let i =1; i<10; i++){
        console.log(i);
    }


}
    var car = new Object();
    car.brand = "Mercedes"
    car.model="C class"
    car.price = "60,00,000";
    console.log(car);
    //Arrays
    var names = ["bhrath", "Bobby", "Abhishek"];
    console.log(names);

    let  Car = class {
        //initialize any object

        constructor(brand,modelName,price){
            this.brand = brand;
            this.modelName = modelName;
            this.price = price;

        }

        print(){
            console.log("this is a :" +this.brand+" "+this.modelName + "which costs: " +this.price);
        }
    }
    var C2 = new Car ("BMW", "3-series", 50000000);
    var C1 = new Car("Mercedes","A Class", 4000000);
    
    C1.print();
    C2.print();
counting ();
creditScore(800);


class TodaysDate extends Date{ //example to make a class a child class of a inbuild JS class
    constructor(){
        super();
    }

    printDate(){
        console.log(this.getDate());
    
    }
}
let today = new TodaysDate();
today.printDate();

//Inheritance
class AppleLaptops { //parent class

    constructor(brand){
        this.brand = "Apple";
    }}
class MacBookPro extends AppleLaptops{ //child class
    constructor(model, processor, ram){
        super();
        this.model = model;
        this.processor = processor;
        this.ram = ram;
    }
}

let l1 = new MacBookPro("2021 15 Macbookpro", "i7", 16)
console.log(l1.brand + " "+ l1.model + " "+ l1.processor + " "+ l1.ram);

//SPREAD OPERATOR

let fruits = ["Apple", "Banana", "Pineapple"]

let seasonalFruits = ["Mango", "Linchi"]

let allFruits = [...fruits, ...seasonalFruits]; // ... is the spread operator and it copies all the elements of the array
// named after the use of ....

console.log(allFruits);

//Inline Functions or Arraow Functions
//A concept fo arrow funtion was introduced from ES6

let counting2 = () => { //this is how you define a inline / arrow function
    for(let i =1; i<10; i++){
        console.log(i);
}
}
counting2();

//Three are three keywords that can be used to declare a variable in javascript 
//var -> this has a scope of a function(globlal and it can be redeclared)

var num1 = 1000;
var num1 = 2000;
console.log(num1);

//Let keyword -> was announced with ES6, it has a block scope
let a = 100
function addNumbers(){
    a = 230
    let b = 100
    console.log(a+b);
        
    }
addNumbers();
console.log(a+1000);

//const -> It stands for constant so you cannot change the value directly , this also has a scope of block

function addNumbers1(){
    const num2 = 233;
    //const num2 = 990;


}
function dogs(){
    this.dogname = "Lab"
    throw new error("This is not a wild dog")
}
dogs.prototype.display = function(){
    return "this dogs breed is :" + this.dogname;
}
//Constructor Function
function Animal(dogname){
    this.dogname = dogname
}


//create an object without using the constructor
Animal.prototype = Object.create(dogs.prototype)
let tommy = new Animal("German shepherd")
console.log(tommy.display());

