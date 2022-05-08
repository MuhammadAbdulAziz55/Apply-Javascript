// 4! = 1 * 2 * 3 * 4
//  10! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10

// Calculate factorial of number using for loop
// EX-1
// var factorial = 1;
// for (let i = 1; i <= 10; i++){
//     factorial = factorial * i;
//     // console.log(i, factorial); 
// }  

// Expected output: 1 1
// 2 2
// 3 6
// 4 24
// 5 120
// 6 720
// 7 5040
// 8 40320
// 9 362880
// 10 3628800


// Same calculation if we use function
function factorial(n) {

    factorial = 1;
    for (let i = 1; i <= n; i++){ 
       factorial = factorial * i;
    }  
    return factorial;
}

var result = factorial(5);
console.log(result);
// expected output: 120


// Calculate factorial of number using while loop

function wlFactorial(num){
    var i = 1;
    fact= 1;
    while (i <= num){
    fact = fact * i;
        i++
    }
    return fact;
}

var output = wlFactorial(4);
console.log(output);

