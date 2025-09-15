const delayedCallback = (callback: () => void, delay: number) => {
    setTimeout(callback, delay);
}

delayedCallback(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

function Ex02() {
    return (
        <div>Ex02</div>
    )
}

export default Ex02