const year = 2022;
let remainder = year % 4;
if(remainder == 0){
    // console.log('Your year is a leap year');
}else{
    // console.log('Your year is not a leap year');
}


// Ex-2:
function leapYear(year) {
    return year % 100 === 0 ? year % 400 === 0: year % 4 === 0;
}
// console.log(leapYear(2016));
// console.log(leapYear(2000));
// console.log(leapYear(1700));
// console.log(leapYear(1800));
// console.log(leapYear(100));

const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1800));
// console.log(isLeapYear(100));

// Check Leap Year Using function and if else..
function checkLeapYear(year) {
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
       return true;
    }else{
       return false;
    }  
}
console.log(checkLeapYear(2016));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1700));
console.log(checkLeapYear(1800));
console.log(checkLeapYear(100));



// program to check leap year
function checkLeapYear(years) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap years');
    } else {
        console.log(year + ' is not a leap years');
    }
}


checkLeapYear(years);
