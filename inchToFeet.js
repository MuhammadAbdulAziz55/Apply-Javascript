var inch = 68;
var feet = inch / 12;
console.log(feet);


function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var fatherFeet = inchToFeet(30);
console.log('Father Feet', fatherFeet);

var motherFeet = inchToFeet(50);
console.log('Mother Feet', motherFeet);
