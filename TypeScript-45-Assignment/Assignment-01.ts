///////////// Exercise-01 /////////////

// solution
//node.js installed
//type-script installed
//vs code installed

////////////// Exercise-02 ////////////

//Solution
let person: string = "Nadeem";

console.log("Hello" + " " + person);

////////////// Exercise-03 ////////////

// Solution
let person1: string = "nadeem";
let personPart: string = person1[0].toUpperCase();
let personSecondPart: string = person1.slice(1);

console.log(person1.toUpperCase());
console.log(person1.toLowerCase());
// title case
console.log(`${personPart.concat(personSecondPart)}`);

////////////// Exercise-04 ////////////

// solution
let Quote =
  'Mother Teresa,"If you judge people, you have no time to love them."';
console.log(Quote);

////////////// Exercise-05 ////////////

// solution
let famousPerson = "Mother Teresa";
let message = `${famousPerson},"If you judge people, you have no time to love them.`;
console.log(message);

////////////// Exercise-06 ////////////

// solution
let person2 = "\t nadeem \n";
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

let favNumber: number = 12;
console.log(`${favNumber} is my favorite number`);

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
let names: string[] = ["faraz", "riaz", "danish"];
// accessing
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

////////////// Exercise-12 ////////////

let names1: string[] = ["faraz", "riaz", "danish"];

// solution
// method 1
// for(let i=0;i<names1.length;i++){
// console.log(`Hello how are you ${names1[i]}`)
// }

// method 2
console.log(`Hello how are you ${names1[0]}`);
console.log(`Hello how are you ${names1[1]}`);
console.log(`Hello how are you ${names1[2]}`);

////////////// Exercise-13 ////////////

// solution
let transport: string[] = ["motercycle", "car", "bus", "aeroplane"];

console.log(`${transport[0]} is eassier to ride`);
console.log(`${transport[1]} is very comfertable`);
console.log(`i don't like ${transport[2]} `);
console.log(` ${transport[3]} is best transport `);

////////////// Exercise-14 ////////////

let people: string[] = ["riaz", "sheeraz", "faraz"];

// solution
// method 1
// for(let i =0;i<people.length;i++){
//     console.log(`i am inviting you for dinner ${people[i]}`)

// }
// method 2
console.log(`i am inviting you for dinner ${people[0]}`);
console.log(`i am inviting you for dinner ${people[1]}`);
console.log(`i am inviting you for dinner ${people[2]}`);

////////////// Exercise-15 ////////////

// solution
let people1: string[] = ["riaz", "sheeraz", "faraz"];

for (let i = 0; i < people1.length; i++) {
  console.log(`i am inviting you for dinner ${people[i]}`);
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
for (let i = 0; i < people1.length; i++) {
  console.log(` i am inviting you and i did changes ${people[i]}`);
}

////////////// Exercise-16 ////////////

// solution
let people2: string[] = ["riaz", "sheeraz", "daniyal"];

for (let i = 0; i < people2.length; i++) {
  console.log(`i am inviting you for dinner ${people2[i]}`);
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
let people3: string[] = [
  "qadir",
  "riaz",
  "sheeraz",
  "daniyal",
  "shahzain",
  "ali",
];

for (let i = 0; i < people2.length; i++) {
  console.log(`i am inviting you for dinner ${people2[i]}`);
}

console.log(
  "my table won’t arrive in time for the dinner, and you have space for only two guest"
);

//  part 1
console.log(
  "Unfortunately, there's only space for two people at the dinner table."
);

// part 2
let persons1 = people3.pop();
let persons2 = people3.pop();
let persons3 = people3.pop();
let persons4 = people3.pop();

console.log(`${persons1} sorry i cant invite you`);
console.log(`${persons2} sorry i cant invite you`);
console.log(`${persons3} sorry i cant invite you`);
console.log(`${persons4} sorry i cant invite you`);

// part 3

for (let i = 0; i < people2.length; i++) {
  console.log(`you all are stil invited ${people2[i]}`);
}

// part 4
people3.pop();
people3.pop();

console.log("empty list");

////////////// Exercise-18 ////////////

// solution
//my favret places are burjkhalifa , calafornia , landon , new york , burlin

// part 1
let array: string[] = [
  "burjkhalifa",
  "calafornia",
  "london",
  "new yotk",
  "burlin",
];

// part 2
console.log(array);

// part 3
let sortedNewArray = [...array].sort();
console.log(sortedNewArray);

// part 4
// previous array
console.log(array);

// part 5
let reversOrder = [...array].sort().reverse();
console.log(reversOrder);

// part 6
// previous array
console.log(array);

// part 7
let reversArry = array.reverse();

// part 8
let reversArry2 = array.reverse();

// part 9
let sortArry = array.sort();

// part 10
console.log(array);

////////////// Exercise-19 ////////////

// solution
console.log("I am inviting 6 persons");

////////////// Exercise-20 ////////////

// solution

let myFavCities: string[] = ["mirpurkhas", "karachi", "islamabad", "lahore"];

////////////// Exercise-21 ////////////

// solution
interface Obj {
  city1: string;
  city2: string;
  city3: string;
}
let myObj: Obj = {
  city1: "mirpurkhas",
  city2: "karachi",
  city3: "lahore",
};

////////////// Exercise-22 ////////////

// solution
let arrays: number[] = [1, 2, 3, 4, 5];
// index error
array[5];
// solve
array[4];


////////////// Exercise-23 ////////////

// solution
let myCarName: string = "corolla";
let myBettry: number = 12;
let myNeghborName: string = "daniyal";
let myName: string = "hero";
let myNew: string = "zero";

// part 1
if (myCarName === "corolla") {
  console.log(`i pridict ${true}`);
}
if (myBettry === 12) {
  console.log(`i pridict ${true}`);
}
if (myNeghborName === "daniyal") {
  console.log(`i pridict ${true}`);
}

// part 2
// 5 true
if (myCarName === "corolla") {
  console.log(`i pridict ${true}`);
}
if (myBettry === 12) {
  console.log(`i pridict ${true}`);
}
if (myNeghborName === "daniyal") {
  console.log(`i pridict ${true}`);
}

if (myName === "hero") {
  console.log(`i pridict ${true}`);
}
if (myNew === "zero") {
  console.log(`i pridict ${true}`);
}
// 5 false
if (myCarName === "nana") {
} else {
  console.log(`i pridict ${false}`);
}
if (myBettry === 2) {
} else {
  console.log(`i pridict ${false}`);
}
if (myNeghborName === "hero") {
} else {
  console.log(`i pridict ${false}`);
}

if (myName === "name") {
} else {
  console.log(`i pridict ${false}`);
}
if (myNew === "narera") {
} else {
    console.log(`i pridict ${false}`);
}

////////////// Exercise-24 ////////////

// solution 

let myCarName2: string = "audi";
let myBettry2: number = 62;
let myNeghborName2: string = "faraz";
let myNum : number = 12
if(myCarName2=="audi"){
    console.log(true)
}
if(myBettry2==2){
}
else{
    console.log(false)

}
// part 1

if(myNeghborName2=='faraz'){
    console.log("faraz")
}

if(myNeghborName2!=='daniyal'){
    console.log("not daniyal")
}

// part 2
if(myNum==2){
    console.log('num = 2')
}
else if (myNum !==15){
    console.log('not equal 15')
}
else if(myNum > 12){
    console.log("greter then 12")
}
else if (myNum <= 12){
    console.log("less the equal to 12")
}
else{
    console.log("don't know")
}
// part 3 
if(myNum ==12 && myNum<=12){
    console.log("my num is 12")
}
else if ( myNum !=12 || myNum>=12){
    console.log("num is greter equal 12")
}
else{
    console.log("don't know")
}

// part 4
let array2 : number[] = [1,2,3,4,5]
let item : number = 4
if(array2.includes(item)){
    console.log("item in array")
} 
else{
    
    console.log("item not in array")
}



////////////// Exercise-25 ////////////

// solution 
let allienColor : string = "green"
// part 1
if(allienColor=="green"){
    console.log("player earned 5 points")
}
// part 2
if(allienColor=="red"){
    console.log("player earned 5 points")
}




////////////// Exercise-26 ////////////

// solution
let allienColor1 : string = "green"

// part 1
if(allienColor1=="green"){
    console.log("player earned 5 points")
}
// part 2
if(allienColor1!=="green"){
    console.log("player earned 10 points")
}
// part 3
if(allienColor1=="green"){
    console.log("player earned 5 points")
}
else if(allienColor1!=="green"){
    console.log("player earned 10 points")
}
else{
 
  console.log("don't know")
}





////////////// Exercise-27 ////////////

// solution
if(allienColor1=="green"){
    console.log("player earned 5 points")
}
else if(allienColor1=="yellow"){
    console.log("player earned 10 points")
}
else if(allienColor1=="red"){
    console.log("player earned 10 points")
}
else{
    console.log("don't know")

}




////////////// Exercise-28 ////////////

// solution
let age : number =18
if(age<2){
    console.log(" person is baby")
}
else if(age>=2 && age<4 ){
    console.log("person is toddler")
    
}
else if(age >=4 && age<13 ){
    console.log("person is kid")
    
}
else if(age >=13 && age<20 ){
    
    console.log("person is teenager")
}
else if(age >=20 && age<65 ){
    
    console.log("person is adult")
}
else{
    console.log("person is older")

}



////////////// Exercise-29 ////////////

// solution 
let favFruits : string[] = ["apple","mango","orange","banana" ]

if(favFruits.includes('banana')){
}
else if( favFruits.includes('apple')){
    
    console.log(" I like apple")
}
else if( favFruits.includes('lemon')){
    console.log(" I like lemon")

}
else if( favFruits.includes('gava')){
    console.log(" I like gava")

}
else if( favFruits.includes('orange')){
    console.log(" I like orange")

}
else{
    console.log("not favoret")
}




////////////// Exercise-30 ////////////

// solution
let arrayOfUsers : string[] = ["user1","user2","admin","user3"]

for(let i=0 ;i<arrayOfUsers.length;i++){
    if(arrayOfUsers[i]==="admin"){
        console.log("Hello Admin")
    }
    else{
        
        console.log("Hello users")
    }

  }




////////////// Exercise-31 ////////////
let arrayOfUsers2 : string[] = ["user1","user2","admin","user3"]
arrayOfUsers2.pop()
arrayOfUsers2.pop()
arrayOfUsers2.pop()
arrayOfUsers2.pop()
if(arrayOfUsers2.length===0){
    console.log("empty we need users")

}



////////////// Exercise-32 ////////////

// solution 
let currentUser: string[] = ["nadeem","shahzain","ali","faraz"]
let newUser: string[] = ["nadeem","zaid","haris","junaid"]

for(let singleUser of newUser){
    if(currentUser.includes(singleUser)){
        console.log(`${singleUser} you have to enter username pasword` )
    }
    else{
        console.log(`${singleUser} username is available` )

    }
}




////////////// Exercise-33 ////////////

// solution
let numbers : number[] = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<numbers.length;i++){
  if(numbers[i]==1){
    console.log(`${numbers[i]}st`)
  }
  else if (numbers[i]==2){
    console.log(`${numbers[i]}nd`)
    
  }
  else if (numbers[i]==3){
    console.log(`${numbers[i]}rd`)
    
  }
  else{
    console.log(`${numbers[i]}th`)
  }

  
}



////////////// Exercise-34 ////////////

// solution 
let pizzas : string[] = ["peproni","margherta","supreme"]

// part 1
pizzas.forEach((eachPiza)=>{
  console.log(eachPiza)

})
// part 2
pizzas.forEach((eachPiza)=>{
  console.log(` i like ${eachPiza} pizza`)

})
// part 3 
console.log("pizzas are very tasty and i like the very much i eat pizza in a week")



////////////// Exercise-35 ////////////

// solution
let animals : string[] = ["dog","cat","goat"]
for(let i=0;i<animals.length;i++){
  console.log(`${animals[i]} is very good pet`)
}
console.log("these all pets are good")



////////////// Exercise-36 ////////////

// solution
function makeShirts(size:string,name:string):void{
  console.log(`size ${size} and print name ${name}`)
}
makeShirts("small","nadeem")



////////////// Exercise-37 ////////////

// solution
function makesShirts(size:string = "large",name:string = "i love typescript"):void{
  console.log(`size ${size} and print name ${name}`)
}
makesShirts("medium")
makesShirts("medium","hello world")



////////////// Exercise-38 ////////////

// solution 
function descriCity(city:string = "karachi",country:string="pakistan"):void{
  console.log(`${city} is the capital of ${country} `)

}
descriCity()
descriCity("dehli","india")
descriCity("dhaka","bangladesh")



////////////// Exercise-39 ////////////

// solution 
function cityName(city:string,country:string):string{
return `"${city}, ${country}"`
}
console.log(cityName("lahore","pakistan"))
console.log(cityName("mumbai","india"))
console.log(cityName("dhaka","bangladesh"))


////////////// Exercise-40 ////////////
interface album{
  ArtistName:string;
  titleAlbum:string;
  traks?:number 
}
// solution
function makeAlbum(artist:string,title:string,traks:number | undefined=0){
  let  Album : album= {
    ArtistName:artist,
    titleAlbum:title
  }
  if(traks !== 0){
    Album.traks=traks
  }
return Album

}
console.log(makeAlbum("atif aslam","title1"))
console.log(makeAlbum("aslam","title1",12))



////////////// Exercise-41 ////////////

// solution
let megicians : string[] = ["nadeem","riaz","sheeraz"]
function showMegicians(array:string[]):string | undefined{
for(let singleMegician of array){
   return singleMegician
}
}
console.log(showMegicians(megicians))



////////////// Exercise-42 ////////////

// solution 
function makeGreet(arr:string[]):string|undefined{

  for(let singleMegician of arr){
    return`${singleMegician} welcome all of you`
  }
}
// original megcicans
console.log(showMegicians(megicians))
// greeted megicians 
let greetedMegicians = makeGreet(megicians)
console.log(greetedMegicians)


////////////// Exercise-43 ////////////

// solution
function makeGret(arr : string[]):string[]{
let gretMegicians :string[] = []
  for(let singleMegician of arr){
      gretMegicians.push(`${singleMegician} new greet`)
  }
  return gretMegicians
}
// original megcicans
console.log(showMegicians(megicians))
// new greeted megicians 
let newGreted = makeGret(megicians)
console.log(greetedMegicians)
// unchanged 
console.log(showMegicians(megicians))

////////////// Exercise-44 ////////////

// solution
function makeSandwich(...toping:string[]){
  console.log("making sandwich")
  for(let i of toping){
    console.log("--"+ " " +i)
  }
  
  console.log("enjoy your sandwhich")

}
makeSandwich("item1","item2","item3")
makeSandwich("item4","item5","item6")
makeSandwich("item7","item8","item9")

////////////// Exercise-45 ////////////

// solution
interface Car{
manufacture:string;
mode:string;
[key:string]:any
}
function makeCar(menufacture:string,model:string,...options:[string,string,string]):Car{
const car:Car = {manufacture:menufacture,mode:model}
options.forEach((each,val)=>{
 car[each]= val
})
return car
}
console.log(makeCar("Toyota","corolla","HaveAccident","kmRun","year"))