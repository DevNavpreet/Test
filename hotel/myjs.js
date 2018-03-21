//for reservation
var  chin = document.getElementById('d1').value;
var  chout = document.getElementById('d2').value;
var  adu = document.getElementById('ad').value;
var  kds = document.getElementById('kd').value;
function getValue(){
	alert("your checkin date "+chin+"\n"+"your checkout date "+chout+"\n"+"No.of person "+adu+"\n"+"kids "+kds+"\n"+"Thanks for your booking.");
}
//for contact
document.getElementById('mybutton').addEventListener('click',showVal);
function showVal(){
	var fullname = document.getElementById('name').value;
	var fullmail = document.getElementById('email').value;
	var fullmsg = document.getElementById('text').value;
	alert("Your name is "+fullname+"\n"+"your mail id is "+fullmail+"\n"+"your message "+fullmsg+"\n"+"thank you for contacting us");
}