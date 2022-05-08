// Fibonacci Series = 0,1,2,3,5,8,13,21,34,55,89,144...
// Fn = Fn-1 + Fn-2
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	F18	F19	F20
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765




var fibo = [0 , 1];
for(var i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2])
}
// console.log(fibo);

function fibonacci(n){
    var fibo1 = [0, 1];
    for(i = 2; i <= 5; i++){
        fibo1[i] = fibo[i-1] + fibo[i-2];
    } 
    return fibo1;
}

var result = fibonacci();
// console.log(result);

// Using while loop
function fibona(x){
    var i = 2;
    var fiboWhile = [0, 1];
    while(i <= 12){
        fiboWhile[i] = fiboWhile[i-1] + fiboWhile[i-2];
        i++ ;
    }
    return fiboWhile;
   
}


var expectedOutput = fibona();
console.log(expectedOutput);