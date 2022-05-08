function fiboRecursive(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fiboRecursive(n - 1) + fiboRecursive(n - 2);
    }
}

var expectedOutput = fiboRecursive(10);
console.log(expectedOutput);
