function calculator(a, b, callback) {
    let result = a + b;
    callback(result); 
}

function displayResult(result) { 
    console.log("The result is: " + result);
}

calculator(5, 10, displayResult);