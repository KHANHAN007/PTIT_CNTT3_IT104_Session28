
function task1(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback();
    }, 1000);
}

function task2(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback();
    }, 1500);
}

function task3(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback();
    }, 2000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed");
        });
    });
});

function Ex06() {
    return (
        <div>Ex06</div>
    )
}

export default Ex06