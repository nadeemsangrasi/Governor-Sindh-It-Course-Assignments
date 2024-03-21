///////////// Exercise-01 /////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// solution
//node.js installed
//type-script installed
//vs code installed
////////////// Exercise-02 ////////////
//Solution
var person = "Nadeem";
console.log("Hello" + " " + person);
////////////// Exercise-03 ////////////
// Solution
var person1 = "nadeem";
var personPart = person1[0].toUpperCase();
var personSecondPart = person1.slice(1);
console.log(person1.toUpperCase());
console.log(person1.toLowerCase());
// title case
console.log("".concat(personPart.concat(personSecondPart)));
////////////// Exercise-04 ////////////
// solution
var Quote = 'Mother Teresa,"If you judge people, you have no time to love them."';
console.log(Quote);
////////////// Exercise-05 ////////////
// solution
var famousPerson = "Mother Teresa";
var message = "".concat(famousPerson, ",\"If you judge people, you have no time to love them.");
console.log(message);
////////////// Exercise-06 ////////////
// solution
var person2 = "\t nadeem \n";
console.log(person2);
// after striping
console.log(person2.trim());
////////////// Exercise-07 ////////////
// solution
// addition
console.log(4 + 4);
// subtraction
console.log(16 - 8);
//division
console.log(16 / 2);
//Multiplication
console.log(4 * 2);
////////////// Exercise-08 ////////////
// solution
console.log(4 + 4);
console.log(16 - 8);
console.log(16 / 2);
console.log(4 * 2);
////////////// Exercise-09 ////////////
// solution
var favNumber = 12;
console.log("".concat(favNumber, " is my favorite number"));
////////////// Exercise-10 ////////////
// there i added comments
// addition
console.log(4 + 4);
// subtraction
console.log(16 - 8);
//division
console.log(16 / 2);
//Multiplication
console.log(4 * 2);
////////////// Exercise-11 ////////////
// solution
var names = ["faraz", "riaz", "danish"];
// accessing
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
////////////// Exercise-12 ////////////
var names1 = ["faraz", "riaz", "danish"];
// solution
// method 1
// for(let i=0;i<names1.length;i++){
// console.log(`Hello how are you ${names1[i]}`)
// }
// method 2
console.log("Hello how are you ".concat(names1[0]));
console.log("Hello how are you ".concat(names1[1]));
console.log("Hello how are you ".concat(names1[2]));
////////////// Exercise-13 ////////////
// solution
var transport = ["motercycle", "car", "bus", "aeroplane"];
console.log("".concat(transport[0], " is eassier to ride"));
console.log("".concat(transport[1], " is very comfertable"));
console.log("i don't like ".concat(transport[2], " "));
console.log(" ".concat(transport[3], " is best transport "));
////////////// Exercise-14 ////////////
var people = ["riaz", "sheeraz", "faraz"];
// solution
// method 1
// for(let i =0;i<people.length;i++){
//     console.log(`i am inviting you for dinner ${people[i]}`)
// }
// method 2
console.log("i am inviting you for dinner ".concat(people[0]));
console.log("i am inviting you for dinner ".concat(people[1]));
console.log("i am inviting you for dinner ".concat(people[2]));
////////////// Exercise-15 ////////////
// solution
var people1 = ["riaz", "sheeraz", "faraz"];
for (var i = 0; i < people1.length; i++) {
    console.log("i am inviting you for dinner ".concat(people[i]));
}
// part 1
console.log("someone is not comming");
// part 2
console.log("faraz can't make it");
// part 3
// replacing faraz with new
people1.pop();
// new people
people1.push("daniyal");
// part 3
for (var i = 0; i < people1.length; i++) {
    console.log(" i am inviting you and i did changes ".concat(people[i]));
}
////////////// Exercise-16 ////////////
// solution
var people2 = ["riaz", "sheeraz", "daniyal"];
for (var i = 0; i < people2.length; i++) {
    console.log("i am inviting you for dinner ".concat(people2[i]));
}
console.log("i Think of three more guests to invite to dinner.");
// part 1
console.log("i found more bigger table");
// part 2
// new person in starting
console.log(people2.unshift("qadir"));
// part 3
console.log(people2.push("shahzain"));
console.log(people2.push("ali"));
////////////// Exercise-17 ////////////
// solution
var people3 = [
    "qadir",
    "riaz",
    "sheeraz",
    "daniyal",
    "shahzain",
    "ali",
];
for (var i = 0; i < people2.length; i++) {
    console.log("i am inviting you for dinner ".concat(people2[i]));
}
console.log("my table won’t arrive in time for the dinner, and you have space for only two guest");
//  part 1
console.log("Unfortunately, there's only space for two people at the dinner table.");
// part 2
var persons1 = people3.pop();
var persons2 = people3.pop();
var persons3 = people3.pop();
var persons4 = people3.pop();
console.log("".concat(persons1, " sorry i cant invite you"));
console.log("".concat(persons2, " sorry i cant invite you"));
console.log("".concat(persons3, " sorry i cant invite you"));
console.log("".concat(persons4, " sorry i cant invite you"));
// part 3
for (var i = 0; i < people2.length; i++) {
    console.log("you all are stil invited ".concat(people2[i]));
}
// part 4
people3.pop();
people3.pop();
console.log("empty list");
////////////// Exercise-18 ////////////
// solution
//my favret places are burjkhalifa , calafornia , landon , new york , burlin
// part 1
var array = [
    "burjkhalifa",
    "calafornia",
    "london",
    "new yotk",
    "burlin",
];
// part 2
console.log(array);
// part 3
var sortedNewArray = __spreadArray([], array, true).sort();
console.log(sortedNewArray);
// part 4
// previous array
console.log(array);
// part 5
var reversOrder = __spreadArray([], array, true).sort().reverse();
console.log(reversOrder);
// part 6
// previous array
console.log(array);
// part 7
var reversArry = array.reverse();
// part 8
var reversArry2 = array.reverse();
// part 9
var sortArry = array.sort();
// part 10
console.log(array);
////////////// Exercise-19 ////////////
// solution
console.log("I am inviting 6 persons");
////////////// Exercise-20 ////////////
// solution
var myFavCities = ["mirpurkhas", "karachi", "islamabad", "lahore"];
var myObj = {
    city1: "mirpurkhas",
    city2: "karachi",
    city3: "lahore",
};
////////////// Exercise-22 ////////////
// solution
var arrays = [1, 2, 3, 4, 5];
// index error
array[5];
// solve
array[4];
////////////// Exercise-23 ////////////
// solution
var myCarName = "corolla";
var myBettry = 12;
var myNeghborName = "daniyal";
var myName = "hero";
var myNew = "zero";
// part 1
if (myCarName === "corolla") {
    console.log("i pridict ".concat(true));
}
if (myBettry === 12) {
    console.log("i pridict ".concat(true));
}
if (myNeghborName === "daniyal") {
    console.log("i pridict ".concat(true));
}
// part 2
// 5 true
if (myCarName === "corolla") {
    console.log("i pridict ".concat(true));
}
if (myBettry === 12) {
    console.log("i pridict ".concat(true));
}
if (myNeghborName === "daniyal") {
    console.log("i pridict ".concat(true));
}
if (myName === "hero") {
    console.log("i pridict ".concat(true));
}
if (myNew === "zero") {
    console.log("i pridict ".concat(true));
}
// 5 false
if (myCarName === "nana") {
}
else {
    console.log("i pridict ".concat(false));
}
if (myBettry === 2) {
}
else {
    console.log("i pridict ".concat(false));
}
if (myNeghborName === "hero") {
}
else {
    console.log("i pridict ".concat(false));
}
if (myName === "name") {
}
else {
    console.log("i pridict ".concat(false));
}
if (myNew === "narera") {
}
else {
    console.log("i pridict ".concat(false));
}
////////////// Exercise-24 ////////////
// solution 
var myCarName2 = "audi";
var myBettry2 = 62;
var myNeghborName2 = "faraz";
var myNum = 12;
if (myCarName2 == "audi") {
    console.log(true);
}
if (myBettry2 == 2) {
}
else {
    console.log(false);
}
// part 1
if (myNeghborName2 == 'faraz') {
    console.log("faraz");
}
if (myNeghborName2 !== 'daniyal') {
    console.log("not daniyal");
}
// part 2
if (myNum == 2) {
    console.log('num = 2');
}
else if (myNum !== 15) {
    console.log('not equal 15');
}
else if (myNum > 12) {
    console.log("greter then 12");
}
else if (myNum <= 12) {
    console.log("less the equal to 12");
}
else {
    console.log("don't know");
}
// part 3 
if (myNum == 12 && myNum <= 12) {
    console.log("my num is 12");
}
else if (myNum != 12 || myNum >= 12) {
    console.log("num is greter equal 12");
}
else {
    console.log("don't know");
}
// part 4
var array2 = [1, 2, 3, 4, 5];
var item = 4;
if (array2.includes(item)) {
    console.log("item in array");
}
else {
    console.log("item not in array");
}
////////////// Exercise-25 ////////////
// solution 
var allienColor = "green";
// part 1
if (allienColor == "green") {
    console.log("player earned 5 points");
}
// part 2
if (allienColor == "red") {
    console.log("player earned 5 points");
}
////////////// Exercise-26 ////////////
// solution
var allienColor1 = "green";
// part 1
if (allienColor1 == "green") {
    console.log("player earned 5 points");
}
// part 2
if (allienColor1 !== "green") {
    console.log("player earned 10 points");
}
// part 3
if (allienColor1 == "green") {
    console.log("player earned 5 points");
}
else if (allienColor1 !== "green") {
    console.log("player earned 10 points");
}
else {
    console.log("don't know");
}
////////////// Exercise-27 ////////////
// solution
if (allienColor1 == "green") {
    console.log("player earned 5 points");
}
else if (allienColor1 == "yellow") {
    console.log("player earned 10 points");
}
else if (allienColor1 == "red") {
    console.log("player earned 10 points");
}
else {
    console.log("don't know");
}
////////////// Exercise-28 ////////////
// solution
var age = 18;
if (age < 2) {
    console.log(" person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is adult");
}
else {
    console.log("person is older");
}
////////////// Exercise-29 ////////////
// solution 
var favFruits = ["apple", "mango", "orange", "banana"];
if (favFruits.includes('banana')) {
}
else if (favFruits.includes('apple')) {
    console.log(" I like apple");
}
else if (favFruits.includes('lemon')) {
    console.log(" I like lemon");
}
else if (favFruits.includes('gava')) {
    console.log(" I like gava");
}
else if (favFruits.includes('orange')) {
    console.log(" I like orange");
}
else {
    console.log("not favoret");
}
////////////// Exercise-30 ////////////
// solution
var arrayOfUsers = ["user1", "user2", "admin", "user3"];
for (var i = 0; i < arrayOfUsers.length; i++) {
    if (arrayOfUsers[i] === "admin") {
        console.log("Hello Admin");
    }
    else {
        console.log("Hello users");
    }
}
////////////// Exercise-31 ////////////
var arrayOfUsers2 = ["user1", "user2", "admin", "user3"];
arrayOfUsers2.pop();
arrayOfUsers2.pop();
arrayOfUsers2.pop();
arrayOfUsers2.pop();
if (arrayOfUsers2.length === 0) {
    console.log("empty we need users");
}
////////////// Exercise-32 ////////////
// solution 
var currentUser = ["nadeem", "shahzain", "ali", "faraz"];
var newUser = ["nadeem", "zaid", "haris", "junaid"];
for (var _i = 0, newUser_1 = newUser; _i < newUser_1.length; _i++) {
    var singleUser = newUser_1[_i];
    if (currentUser.includes(singleUser)) {
        console.log("".concat(singleUser, " you have to enter username pasword"));
    }
    else {
        console.log("".concat(singleUser, " username is available"));
    }
}
////////////// Exercise-33 ////////////
// solution
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (numbers[i] == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (numbers[i] == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else {
        console.log("".concat(numbers[i], "th"));
    }
}
////////////// Exercise-34 ////////////
// solution 
var pizzas = ["peproni", "margherta", "supreme"];
// part 1
pizzas.forEach(function (eachPiza) {
    console.log(eachPiza);
});
// part 2
pizzas.forEach(function (eachPiza) {
    console.log(" i like ".concat(eachPiza, " pizza"));
});
// part 3 
console.log("pizzas are very tasty and i like the very much i eat pizza in a week");
////////////// Exercise-35 ////////////
// solution
var animals = ["dog", "cat", "goat"];
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " is very good pet"));
}
console.log("these all pets are good");
////////////// Exercise-36 ////////////
// solution
function makeShirts(size, name) {
    console.log("size ".concat(size, " and print name ").concat(name));
}
makeShirts("small", "nadeem");
////////////// Exercise-37 ////////////
// solution
function makesShirts(size, name) {
    if (size === void 0) { size = "large"; }
    if (name === void 0) { name = "i love typescript"; }
    console.log("size ".concat(size, " and print name ").concat(name));
}
makesShirts("medium");
makesShirts("medium", "hello world");
////////////// Exercise-38 ////////////
// solution 
function descriCity(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is the capital of ").concat(country, " "));
}
descriCity();
descriCity("dehli", "india");
descriCity("dhaka", "bangladesh");
////////////// Exercise-39 ////////////
// solution 
function cityName(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(cityName("lahore", "pakistan"));
console.log(cityName("mumbai", "india"));
console.log(cityName("dhaka", "bangladesh"));
// solution
function makeAlbum(artist, title, traks) {
    if (traks === void 0) { traks = 0; }
    var Album = {
        ArtistName: artist,
        titleAlbum: title
    };
    if (traks !== 0) {
        Album.traks = traks;
    }
    return Album;
}
console.log(makeAlbum("atif aslam", "title1"));
console.log(makeAlbum("aslam", "title1", 12));
////////////// Exercise-41 ////////////
// solution
var megicians = ["nadeem", "riaz", "sheeraz"];
function showMegicians(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var singleMegician = array_1[_i];
        return singleMegician;
    }
}
console.log(showMegicians(megicians));
////////////// Exercise-42 ////////////
// solution 
function makeGreet(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var singleMegician = arr_1[_i];
        return "".concat(singleMegician, " welcome all of you");
    }
}
// original megcicans
console.log(showMegicians(megicians));
// greeted megicians 
var greetedMegicians = makeGreet(megicians);
console.log(greetedMegicians);
////////////// Exercise-43 ////////////
// solution
function makeGret(arr) {
    var gretMegicians = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var singleMegician = arr_2[_i];
        gretMegicians.push("".concat(singleMegician, " new greet"));
    }
    return gretMegicians;
}
// original megcicans
console.log(showMegicians(megicians));
// new greeted megicians 
var newGreted = makeGret(megicians);
console.log(greetedMegicians);
// unchanged 
console.log(showMegicians(megicians));
////////////// Exercise-44 ////////////
// solution
function makeSandwich() {
    var toping = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toping[_i] = arguments[_i];
    }
    console.log("making sandwich");
    for (var _a = 0, toping_1 = toping; _a < toping_1.length; _a++) {
        var i = toping_1[_a];
        console.log("--" + " " + i);
    }
    console.log("enjoy your sandwhich");
}
makeSandwich("item1", "item2", "item3");
makeSandwich("item4", "item5", "item6");
makeSandwich("item7", "item8", "item9");
function makeCar(menufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: menufacture, mode: model };
    options.forEach(function (each, val) {
        car[each] = val;
    });
    return car;
}
console.log(makeCar("Toyota", "corolla", "HaveAccident", "kmRun", "year"));
