
function displayNumbers(
    callback: (num: number) => void,
    delay: number
): void {
    let i = 1;
    setInterval(() => {
        callback(i++);
    }, delay);
}

displayNumbers((num) => {
    console.log("Current number:", num);
}, 1000);

function Ex04() {
    return (
        <div>Ex04</div>
    )
}

export default Ex04