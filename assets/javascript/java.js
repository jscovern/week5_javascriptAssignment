for (var i = 0; i <= 100; i++) {
	console.log(i+" * 9 = "+getProductTimes9(i));
}

function getProductTimes9(num) {
	num=num*9;
	return num;
}

var classRoom = ["Lucille", "Michael", "George Michael"];

for (var i=0; i<=(classRoom.length - 1); i++) {
	console.log(classRoom[i]);
}

for (var i=1; i<=100; i++) {
	console.log(checkDiv(i));
}

function checkDiv(num) {
	var string = "";
	if (num % 3 === 0) {
			string=string + "Fizz";
		} 
	if (num % 5 === 0) {
		string=string + "Buzz";
	} else if (num % 3 !== 0 & num % 5 !==0) {
		string=string+i;
	}
	return string;
}
