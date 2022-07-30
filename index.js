const primes = (n) => {
    var isPrime = [], upperLimit = Math.sqrt(n), primes = [];
    for (let i = 0; i < n; i++) {
        isPrime.push(true);
    }
    for (let i = 2; i <= upperLimit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if(isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
};

module.exports = primes;