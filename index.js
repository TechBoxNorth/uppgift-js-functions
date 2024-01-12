/*
// greeting
function greet(){
    console.log('Hello there my friend!');
}

// greeting with name
function greetName(user){
    console.log(`Hello there my friend! You must be ${user}!`);
}

// addition
function addtition(x, y){
    return x + y;
}
let sum = addtition(7, 4);
console.log(`The sum is: ${sum}`);

// division
function division(x, y){
    if(y > 0){
        return x / y;
    }else{
        console.log('Dividing a number by 0 will not work!');
    }
}
let quotient = division(5, 3);
console.log(`The quotient is: ${quotient}`);

// area
function getArea(x, y){
    return x * y;
}
let area = getArea(10, 10);
console.log(`The area is ${area} square units.`);

// greeting with name again
function greetFullName(firstName, lastName){
    firstName = prompt('Please enter your first name');
    lastName = prompt('Please enter your last name');
    alert(`Hello ${firstName} ${lastName}! How are you doing?`);
}

greetFullName();

// distance converter
function distanceConverter(km){
    const kmPerMile = 0.621371;
    let dist = km * kmPerMile;
    console.log(`${km} kilometers is the same distance as ${dist} miles.`)
}

distanceConverter(35);

// temperature converter
function tempConverter(cs){
    return (cs * 9/5) + 32 ;
}
let farenheit = tempConverter(25);
console.log(`In Farenheit the temperature is: ${farenheit} degrees`);

// mean value
let numbers = [1,2,3,4,5,6,7,8,9];
function meanOfArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total / arr.length;
}

let mean = meanOfArray(numbers);
console.log('The mean of the array is: ' + mean);

// systembolaget
function systembolaget(age){
    if(age <= 14){
        console.log('Get out of here!');
    } else if(age > 14 && age < 18 ){
        console.log('Sorry, you are not old enough.');
    } else if(age > 17 && age < 20){
        console.log("Sorry, you must be atleast 20. Why don't you try a bar instead?");
    } else if(age > 19 && age < 81){
        console.log('Thank you! Welcome!');
    } else {
        console.log("I'm sorry, where is your caretaker?");
    }
}

systembolaget(82);

// sum
let tenNumbers = [3,45,1,76,345,32,85,223,2,10];
function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
let sumOfNumbers = sumOfArray(tenNumbers);
console.log('Total sum of the array is: ' + sumOfNumbers);
*/
// list a persons' skills

const person = {
   firstName: 'Anders',
   lastName: 'Stenhammar',
   age: 52,
   city: 'Hallsberg',
   skills: ['Silly', 'Gamedev wannabe', 'Marathon sleeper', 'Smart', 'Friendly']
};

function listSkills(dude){
    for(let i = 0; i < dude.skills.length; i++){
        console.log(dude.skills[i]);
    }
}

listSkills(person);
