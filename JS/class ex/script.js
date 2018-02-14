

function lightBulbOn() {
	document.getElementById('light-bulb').src = "http://biruwa.net/wp-content/uploads/2017/02/Light-bulb-vector.jpg";
	
}

function lightBulbOff() {
	document.getElementById('light-bulb').src = "http://i.dailymail.co.uk/i/pix/2014/01/26/article-2546363-1AFB247500000578-934_306x423.jpg";
}

function myCalc() {
	var x;
	x = 5; // x is a Number
	//x = "Joe"; // x is a String
	var y = 10;
	var z = x + y - x - x;
	console.log(z);
	
	x = "Joe";
	y = "Doe";
	console.log(x + " " + y);
	y = 10;
	console.log(x + " " + y);
	
	x = 5;
	y = 5;
	w = "Joe";
	console.log( x +  y + w );
	console.log(w + x +  y );
	
}