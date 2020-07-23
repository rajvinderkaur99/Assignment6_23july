var h1=89;
var h2=120;
var h3=103;

var avgHeath= (h1+h2+h3)/3;

var z1=116;
var z2=94;
var z3=123;

var avgZane= (z1+z2+z3)/3;
//Calculate the average score for each team
console.log("Average hight score of heath's team "+ avgHeath);
console.log("Average hight score of Zane's team "+ avgZane);

//Decide which team wins in average (highest average score) and 
//print the winner to the console. Also include the average score in the output.
if(avgHeath>avgZane)
{
    console.log("heath team is winner with avg highest score of " + avgHeath);
}
else{
    console.log("zane team is winner with avg highest score of " + avgZane);
}

//Then change the scores to show different winners. Don’t forget to consider
 //that there might be a draw (the same average score)

var he1=120;
var he2=100;
var he3=170;

var avgHeath= (he1+he2+he3)/3;

var za1=89;
var za2=103;
var za3=133;

var avgZane= (za1+za2+za3)/3;

console.log("Average hight score of heath's team "+ avgHeath);
console.log("Average hight score of zane's team "+ avgZane);

if(avgHeath>avgZane)
{
    console.log("heath team is winner with avg highest score of " + avgHeath);
}
else{
    console.log("zane team is winner with avg highest score of " + avgZane);
}

//draw
var he1=120;
var he2=100;
var he3=170;

var avgHeath= (he1+he2+he3)/3;

var za1=100;
var za2=170;
var za3=120;

var avgZane= (za1+za2+za3)/3;

console.log("Average hight score of heath's team "+ avgHeath);
console.log("Average hight score of heath's team "+ avgZane);

if(avgHeath>avgZane)
{
    console.log("heath team is winner or match is draw");
}
else if(avgZane>avgHeath){
    console.log("zane team is winner");
}
else{
    console.log("Match is draw!!");
}

//EXTRA: Mariah also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average value to the console.
// HINT: you will need the && operator to take the decision.
var m1=100;
var m2=170;
var m3=120;

var avgMariah= (m1+m2+m3)/3;
console.log("Average hight score of Mariah's team "+ avgMariah);
var h1=89;
var h2=120;
var h3=103;

var avgHeath= (h1+h2+h3)/3;
console.log("Average hight score of heath's team "+ avgHeath);

var z1=116;
var z2=94;
var z3=123;
var avgZane= (z1+z2+z3)/3;
console.log("Average hight score of Zane's team "+ avgZane);

if(avgHeath>avgZane && avgHeath>avgMariah)
{
    console.log("heath team is winner with avg highest score of " + avgHeath);
}
else if(avgZane>avgHeath && avgZane>avgMariah)
{
    console.log("zane team is winner with avg highest score of " + avgZane);
}
else{
    console.log("Mariah team is winner with avg highest score of " + avgMariah);
}