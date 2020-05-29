window.onload = function(){
	var n =  new Date();
	var y = n.getFullYear();
	var m = n.getMonth() + 1;
	var d = n.getDate();
	var hours = n.getHours();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	var strTime = hours + ampm;
	// var fulldate = m + "/" + d + "/" + y;
	document.getElementById("date").innerHTML = d;
	document.getElementById("month").innerHTML = m;
	document.getElementById("year").innerHTML = y - 2000;
	document.getElementById("time").innerHTML = strTime;
};

