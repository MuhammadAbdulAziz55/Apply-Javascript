// 4! = 1*2*3*4
// 4! = 3! * 4
// 4! = (4-1)! * 4

// n! = (n-1)! * n 

function factorial(n) {
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

var result = factorial(4);
console.log(result);
