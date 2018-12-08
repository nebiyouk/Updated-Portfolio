var date = new Date();
var format = "LLLL";
var today = moment(date).format(format);
console.log(today); 
document.getElementById("date-time").innerHTML = today;



var hourNow = date.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.getElementById("greeting").innerHTML = greeting ;
