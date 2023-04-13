

function fizzBuzz(phoneNumber) {
    let lsp=[]
    let sum = phoneNumber.split('').reduce((acc, curr) => Number(acc) + Number(curr));
    
    for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
    
    lsp.push("FizzBuzz")

    // console.log("FizzBuzz");
    } else if (i % 4 === 0) {
    // console.log("Fizz");
    lsp.push("Fizz")
    } else if (i % 5 === 0) {
    lsp.push("Buzz")
    // console.log("Buzz");
    } else {
    // console.log(lsp);
    lsp.push(i)
    }
    }
    return lsp
    }
    lsp=fizzBuzz('9000000009')
    console.log(lsp.toString());