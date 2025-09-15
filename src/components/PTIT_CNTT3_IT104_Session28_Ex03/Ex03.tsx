import { useCallback } from "react";

function Ex03() {
    const displayNumbers = (callback:(i:number)=>void, delay: number) => {
        while (true) {
            let i = 1;
            setTimeout(() => {
                callback(i++);
            }, delay);
        }
    }

    
    return (
        <div>

        </div>
    )
}

export default Ex03
