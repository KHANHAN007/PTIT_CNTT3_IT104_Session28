function checkCondition(
    condition: boolean,
    callback: (result: boolean) => void
): void {
    setTimeout(() => {
        callback(condition);
    }, 1000);
}
checkCondition(true, (result) => {
    if (result) {
        console.log("Điều kiện đúng");
    } else {
        console.log("Điều kiện sai");
    }
});
function Ex05() {
    return (
        <div>Ex05</div>
    )
}

export default Ex05