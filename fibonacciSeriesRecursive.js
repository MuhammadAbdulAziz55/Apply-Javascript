function fiboSeriesRecursive(n){
    if(n == 0){
        return [0];
    }
    else if (n == 1){
        return [0, 1];
    }
    else{
        var fibo = fiboSeriesRecursive(n - 1);
        var newElement = fibo[n -1] + fibo[n -2];
        fibo.push(newElement);
        return fibo;
    }
}
var result = fiboSeriesRecursive(10);
console.log(result);