/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let a = n;
    let result = 1;
      for ( i  = 0; i < a ; i++){
        result = result * (a - i);
        }
        return(result);
}
