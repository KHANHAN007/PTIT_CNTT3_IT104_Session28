let tasks: string[] = [];
function addTask(
    taskName: string,
    tasks: string[],
    callback: (message: string, updatedTasks: string[]) => void
): void {
    if (tasks.includes(taskName)) {
        callback(`Công việc "${taskName}" đã tồn tại trong danh sách!`, tasks);
        return;
    }
    const updatedTasks = [...tasks, taskName];
    callback(`Đã thêm công việc "${taskName}" thành công!`, updatedTasks);
}
function deleteTask(
    taskName: string,
    tasks: string[],
    callback: (message: string, updatedTasks: string[]) => void
): void {
    if (!tasks.includes(taskName)) {
        callback(`Công việc "${taskName}" không tồn tại trong danh sách!`, tasks);
        return;
    }
    const updatedTasks = tasks.filter(task => task !== taskName);
    callback(`Đã xóa công việc "${taskName}" thành công!`, updatedTasks);
}
function displayTasks(tasks: string[]): void {
    if (tasks.length === 0) {
        console.log('Danh sách công việc trống!');
    } else {
        console.log('Danh sách công việc hiện tại:');
        tasks.forEach((task, idx) => {
            console.log(`${idx + 1}. ${task}`);
        });
    }
}

addTask("Học bài", tasks, (message, updatedTasks) => {
    console.log(message);
    tasks = updatedTasks;
    displayTasks(tasks);
});
addTask("Học bài", tasks, (message, updatedTasks) => {
    console.log(message);
    tasks = updatedTasks;
    displayTasks(tasks);
});
addTask("Làm bài tập", tasks, (message, updatedTasks) => {
    console.log(message);
    tasks = updatedTasks;
    displayTasks(tasks);
});


deleteTask("Học bài", tasks, (message, updatedTasks) => {
    console.log(message);
    tasks = updatedTasks;
    displayTasks(tasks);
});
deleteTask("Đi chơi", tasks, (message, updatedTasks) => {
    console.log(message);
    tasks = updatedTasks;
    displayTasks(tasks);
});
function Ex10() {
    return (
        <div>Ex10</div>
    )
}

export default Ex10