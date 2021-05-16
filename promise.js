/**
 * This file demonstrate how to use Promises in JavaScript
 */

/**
 * @description This function is used to get square of a number
 * @param {Number} num a number for which the square is required
 * @returns a promise which resolves with the square of the number received
 */
const square = num => {
    return new Promise((resolve, reject) => {
        if(typeof(num) !== 'number'){
            reject(`Invalid Input: ${num}`);
        }
        resolve({
            input: num,
            sq: num * num
        });
    });
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
    return Promise.resolve(n);
}

/**
 * Test the code by running all of the above functions
 */
console.time('Execution Time');
square(2)
    .then(data => {
        console.log(`Square: ${data.sq}`);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data.input);
            }, data.input);
        });
    })
    .then(data => {
        console.log(`Square Root: ${Math.sqrt(data)}`);
        return nearestPrime(data);
    })
    .then(data => {
        console.log(`Nearest Prime: ${data}`);
        console.timeEnd('Execution Time');
    })
    .catch(error => console.log(`Error: ${error}`));