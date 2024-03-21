function calculateTotalTime(queue, numTaps) {
    if (!Array.isArray(queue) || queue.length === 0 || !Number.isInteger(numTaps) || numTaps <= 0) {
        throw new Error("Invalid input. Queue must be a non-empty array of integers, and numTaps must be a positive integer.");
    }

    let totalSeconds = 0;
    const flowRate = 100; // ml per second

    for (let i = 0; i < queue.length; i++) {
        const timeToFill = Math.ceil(queue[i] / (flowRate * numTaps));
        totalSeconds += timeToFill;
    }

    return totalSeconds;
}

// Example usage:
const queue = [400, 750, 1000];
const numTaps = 2;
const totalTime = calculateTotalTime(queue, numTaps);
console.log("Total time required for all people to fill their water bottles:", totalTime, "seconds");
