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