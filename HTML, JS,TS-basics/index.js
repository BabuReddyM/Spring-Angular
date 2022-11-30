var name = "Bharath" // global variable since not inside any fun/operation
var age = 32;
var inGradate = true;
var laptop;
laptop = "Dell";
console.log(name);
console.log(laptop);

function alertUser() {
    var favChips = "bingo" // this variable is defined and destroyed inside the function.
    console.log("This user has logged in "+name);

    alert("This user has logged in" + name)

}
alertUser( );
//console.log(favChips);
//if else if and else statements

function operators(num){
    if(num >20){
        console.log("Number is greater than 20");
    } else if(num ==20){
        console.log("number is equal to 20");
    }else{
        console.log("number is smaller than 20")
    }
}

operators(87);
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
counting ();
creditScore(800);