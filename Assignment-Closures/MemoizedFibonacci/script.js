function memoizedFibonacci() {
    let cache = {}; 
    // Private cache to store computed Fibonacci values

    function fibonacci(n) {
        if (n in cache) {
            return cache[n]; // Return cached result if available
        }
        if (n <= 1) {
            return n; // Base cases: Fibonacci(0) = 0, Fibonacci(1) = 1
        }
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2); // Store computed value
        return cache[n];
    }

    return fibonacci;
    
}

// Example usage:
const fib = memoizedFibonacci();
console.log(fib(10)); // Output: 55
console.log(fib(15)); // Output: 610
console.log(fib(20)); // Output: 6765
