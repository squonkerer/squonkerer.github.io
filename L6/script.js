alert("aaaa")
// one line comment
/*
multy line comment
*/
// "test" is not same as "Test"
var x = "1" //older iE
let y = "2" //newer chrome etc. | with = start of varuable | without = change varuable
const z = "3" //constant value not changing
/* Java
int - integer 32bit | max value +/- 214748364
long - integer 64bit | max value +/- 9,223,372,036,854,775,807
string - text
boolean - true/false
float - number with decimal 32bit
double - same as float 64bit
     1+1=2
    "1"+"1"=11
     () * / + - 
*/
let number1 = 1 //int
let wordA = "A" //string
let bool = true //boolean
let number2 = 2.22 //double
// let xxx = yyy | xxx = custom var | y = value
// NB Array starts with 0
// Array / List - multyple varuables = JS .push - add var / .splice - delete var | Java Array - fixed lenght / List - dynamic lenght
// JSON - JavaScript Object Notation - russian nesting doll
// if/else - boolean 1/0 | == compare | > more | < less | => more than | =< less than | ! not same as
// or || \ and &&
/*
    or ||
    00 - 0
    01 - 1
    10 - 1
    11 - 1
    0001001001010 - 1

    and &&
    00 - 0
    01 - 0
    10 - 0
    11 - 1
    010100101010 - 0
    111111111111 - 1
    000000000000 - 0

    == compare | === compare type

    for / while - cycle
    i/j/k/l = iteration
    i < - end iteration
    i++ - increase iteration after by 1 | ++i - increase before
*/
let cars = ["McLaren", "Mercedes", "Toyota", "Mazda", "Ferrari"]
let Car1Obj = {
    "Mark": "McLaren",
    "Color": "Green",
    "Year": 1998,
    "Price": 280000,
    "Sold": false
};
let Car2Obj = {
    "Mark": "Mercedes",
    "Color": "Silver",
    "Year": 2001,
    "Price": 2854369,
    "Sold": true
};
let Car3Obj = {
    "Mark": "Toyota",
    "Color": "White",
    "Year": 1995,
    "Price": 400000,
    "Sold": true
};
let Car4Obj = {
    "Mark": "Mazda",
    "Color": "Blue",
    "Year": 2005,
    "Price": 28000,
    "Sold": false
};
let Car5Obj = {
    "Mark": "Ferrari",
    "Color": "Rred",
    "Year": 1985,
    "Price": 5500000,
    "Sold": true
};
for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + Car1Obj.Mark + " Color: " + Car1Obj.Color + " Year: " + Car1Obj.Year + " Price: " + Car1Obj.Price + " Sold: " + Car1Obj.Sold);
}
for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + Car2Obj.Mark + " Color: " + Car2Obj.Color + " Year: " + Car2Obj.Year + " Price: " + Car2Obj.Price + " Sold: " + Car2Obj.Sold);
}
for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + Car3Obj.Mark + " Color: " + Car3Obj.Color + " Year: " + Car3Obj.Year + " Price: " + Car3Obj.Price + " Sold: " + Car3Obj.Sold);
}
for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + Car4Obj.Mark + " Color: " + Car4Obj.Color + " Year: " + Car4Obj.Year + " Price: " + Car4Obj.Price + " Sold: " + Car4Obj.Sold);
}
for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + Car5Obj.Mark + " Color: " + Car5Obj.Color + " Year: " + Car5Obj.Year + " Price: " + Car5Obj.Price + " Sold: " + Car5Obj.Sold);
}
if(Car1Obj.Sold == true) {
    console.log("Sold");
} else {
    console.log("Available");
}
if(Car2Obj.Sold == true) {
    console.log("Sold");
} else {
    console.log("Available");
}
if(Car3Obj.Sold == true) {
    console.log("Sold");
} else {
    console.log("Available");
}
if(Car4Obj.Sold == true) {
    console.log("Sold");
} else {
    console.log("Available");
}
if(Car5Obj.Sold == true) {
    console.log("Sold");
} else {
    console.log("Available");
}