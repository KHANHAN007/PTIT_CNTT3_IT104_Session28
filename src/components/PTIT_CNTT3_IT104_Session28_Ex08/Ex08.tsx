
function myFilter<T>(
    arr: T[],
    value: T,
    callback: (result: T[], array: T[]) => void
): void {
    const result: T[] = arr.filter((item) => item === value);
    callback(result, arr);
}
const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
myFilter(numbers, 2, (result, array) => {
    console.log(result);
    console.log(array);
});

myFilter(numbers, 10, (result, array) => {
    console.log(result);
    console.log(array);
});
function Ex08() {
    return (
        <div>Ex08</div>
    )
}

export default Ex08