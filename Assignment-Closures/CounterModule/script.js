function createCounter() {
    let count = 0; // Private variable, accessible only within the function

    return {
        increment: function () {
            count++;
            console.log("Count after increment:", count);
        },
        decrement: function () {
            count--;
            console.log("Count after decrement:", count);
        },
        getCount: function () {
            return count;
        }
    };
    
}

// Example usage:
const counter = createCounter();
counter.increment(); // Output: Count after increment: 1
counter.increment(); // Output: Count after increment: 2
counter.decrement(); // Output: Count after decrement: 1
console.log("Current count:", counter.getCount()); // Output: Current count: 1
