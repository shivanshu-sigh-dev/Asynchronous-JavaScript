/**
 * This file demonstrate how to use callbacks in JavaScript
 */

/**
 * @description This function is used to get square of a number
 * @param {Number} num a number for which the square is required
 * @returns the square of the number received
 */
const square = num => {
    if(typeof(num) !== 'number'){
        console.log(`Invalid Input: ${num}`);
    } else {
        return num * num;
    }
}

/**
 * @description This function is used to get square root of a number
 * @param {Number} n a number for which the square root is required
 * @returns the square root of the number received
 */
const sqrt = n => {
    if(typeof(n) !== 'number'){
        console.log(`Invalid Input: ${n}`);
    } else {
        return Math.sqrt(n);
    }
}

/**
 * @description This function is used to check if a number is prime
 * @param {Number} n a number for which the validation needs to be run
 * @returns a boolean giving the verdict
 */
const isPrime = n => {
    if(n === 1){
        return false;
    } else if(n === 2){
        return true;
    } else {
        for(let x = 2; x < n; x++){
            if(n % x === 0){
                return true;
            }
        }
        return true;
    }
};

/**
 * @description This function is used to get nearest prime of a number
 * @param {Number} n a number for which the nearest prime is required
 * @returns the nearest prime of the number received
 */
const nearestPrime = n => {
    while(!isPrime(++n));
    return n;
}

/**
 * @description This function is used to test all of the above functions
 * @param {Number} num a number for which the test needs to be run
 * @param {Function} cb1 Test Square Root
 * @param {Function} cb2 Test Nearest Prime
 */
const _main = (num, cb1, cb2) => {
    console.log(`Square: ${square(num)}`);
    setTimeout(() => {
        console.log(`Square: ${cb1(num)}`);
        console.log(`Nearest Prime: ${cb2(num)}`);
        console.timeEnd('Execution Time');
    }, num);
}

/**
 * Test the code
 */
console.time('Execution Time');
_main(2, sqrt, nearestPrime);