// If you using this formula you can't find the exact calculation
var n = 109;
for(i = 2; i < n; i++){
   
    if( n % i == 0){
        // console.log('Your number is not a prime number');
        break;
    }  
    else{
        // console.log('your number is a prime number');
    }     
    }



// Check Prime Using Function // If you using this formula you will find the exact calculation inshAllah
function isPrime(n) {
    for(i = 2; i < n; i++){
   
        if( n % i == 0){
           return('Your number is not a prime number');
            
        }   
    }
    return('Your number is a prime number');
}

var result = isPrime(109);
console.log(result);