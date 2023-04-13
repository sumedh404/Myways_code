function fizzBuzz(phoneNumber, currentNumber = 1){
    const phoneNumberSum = phoneNumber.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
if(currentNumber > phoneNumberSum){
    return;
}

let output ='';

if(currentNumber % 4 === 0){
    output += 'Fizz';
}
if(currentNumber % 5 === 0){
    output += 'Buzz';
}

if(output === ''){
    output = currentNumber;
}

console.log(output);

fizzBuzz(phoneNumber, currentNumber + 1);
    
    
}

const phoneNumber = 9000000099;
fizzBuzz(phoneNumber);