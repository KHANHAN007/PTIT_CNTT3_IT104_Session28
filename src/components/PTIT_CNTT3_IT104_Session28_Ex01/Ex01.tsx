function calculator(a: number, b: number, callback: (result: number) => void) {
    let result = a + b;
    callback(result);
}

function displayResult(result: number) {
    console.log("The result is: " + result);
}

calculator(5, 10, displayResult);

function Ex01() {
    return (
        <div>Ex01</div>
    )
}

export default Ex01