'use strict';
var jeffheight=1.73 ;
var toddheight= 1.80;
var jeffmass =60;
var toddmass= 45;


var jeffBMI= jeffmass/(jeffheight*jeffheight);
var toddBMI= toddmass/(toddheight*toddheight);

console.log(jeffBMI);
console.log(toddBMI);

if(jeffBMI> toddBMI)
{
    console.log(" Jeff’s BMI higher than Todd’s " + jeffBMI)
}
else{
    console.log(" todd’s BMI higher than Jeff’s " + jeffBMI)
}
