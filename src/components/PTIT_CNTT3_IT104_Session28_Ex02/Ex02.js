const delayedCallback = (callback, delay) => {
    setTimeout(callback, delay);
}

delayedCallback(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);