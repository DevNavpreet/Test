//for contact form
function validate(){
	var x = document.forms["myform"]["myname"].value;
	var a = document.forms["myform"]["mylastname"].value;
	var b = document.forms["myform"]["myemail"].value;
	var c = document.forms["myform"]["mypwd"].value;
	var d = document.forms["myform"]["mymsg"].value;
alert("Thanks "+x+" "+a+" "+"for contacting us."+"\n"+"your email id "+b+" "+"your password "+c+"\n"+"Your message "+d);
	
}
//for login form
function validateLogin(){
	var name = document.forms["loginform"]["lname"].value;
	alert("Thanks for login "+name+".");
}
//for registration
function validateRsg(){
	var f = document.forms["register"]["rname"].value;
	var g = document.forms["register"]["rmail"].value;
	alert("Thanks for registration"+"."+"\n"+"your name "+f+"."+"\n"+"your email "+g+".");
}
//for newsletter
function validateLetter(){
	var nemail = document.forms["news"]["newsmail"].value;
	alert("Thanks for subscription "+nemail+".");
}