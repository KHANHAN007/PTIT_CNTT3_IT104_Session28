function myMap<T, U>(
    arr: T[],
    callback: (element: T, index: number, array: T[]) => U
): U[] {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const doubled = myMap(numbers, (element: number) => element * 2);
console.log(doubled);
function Ex09() {
    return (
        <div>Ex09</div>
    )
}

export default Ex09