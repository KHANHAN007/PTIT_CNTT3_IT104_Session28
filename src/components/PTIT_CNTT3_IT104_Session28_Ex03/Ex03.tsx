

function Ex03() {
    function processArray(arr: number[], callback: (item: number) => void): void {
        arr.forEach((item, index) => {
            setTimeout(() => {
                callback(item);
            }, 1000 * (index + 1));
        });
    }
    processArray([1, 2, 3, 4], (item) => {
        console.log(item);
    });

    return (
        <div>
            Ex03
        </div>
    )
}

export default Ex03
