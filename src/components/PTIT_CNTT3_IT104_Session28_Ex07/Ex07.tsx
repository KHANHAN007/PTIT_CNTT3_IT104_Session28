function myForEach<T>(arr: T[], callback: (element: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, (element, index, array) => {
    console.log('Element:', element, 'Index:', index, 'Array:', array);
});
function Ex07() {
    return (
        <div>Ex07</div>
    )
}

export default Ex07