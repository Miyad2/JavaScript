// OnClick Event

function OnClick(){
     document.querySelector('.on-click').innerHTML="Onclick event is working";
}
// Get Date And Tiem
function getDate(){
     document.querySelector('.show_date').innerHTML=Date();
}
// Display
function dNone(){
     document.querySelector('.display').style.display="none";
}
function dBlock(){
     document.querySelector('.display').style.display="block";
}
// Display
function DblClick(){
     document.querySelector('.d-click').innerHTML="Double Click Event is working";
}
// Mouseover
function mOver(){
     document.querySelector('.m-over').style.color="red";
}
// Mousemove
function mMove(){
     document.querySelector('.m-over').style.color="black";
}
// Focus
function tFocus(){
     document.querySelector('.t-focus').style.color="green";
}
// Submit
function dSubmit(){
     document.querySelector('.d-submit').innerHTML="Your data have been submited";
     document.querySelector('.sub-btn').innerHTML="submited";
}
// Console
function rConsole(){
     console.log("Hello");
}
// Alert
function tAlert(){
     alert("Hello");
}
// Mouseup
function mouseUp(){
     document.querySelector('.mouseup').style.color="red"
}
// Mouseup
function mWheel(){
     document.querySelector('.m_wheel').style.color="red"
}
// Mouseup
function tSelect(){
     alert("Some text are selected")
}
// Mouseup
function iSearch(){
     var x =document.querySelector('.i_search');
     document.querySelector('.i-search').innerHTML= "You are searching for: " + x.value
}
// Input Data
function nData(){
     var x =document.querySelector('.fName');
     var y =document.querySelector('.lName');
     document.querySelector('.fname').innerHTML="First Name: "+ x.value 
     document.querySelector('.lname').innerHTML= "Last Name: "+ y.value
     document.querySelector('.fullName').innerHTML= "Full Name: " + x.value +" "+ y.value

     x.value =""
     y.value =""
}
// Reset
function fReset(){
    alert("Are you sure?")
}
// Math
function tNumber(){
     var x =document.querySelector('.fNum');
     var y =document.querySelector('.lNum');
     var z =parseInt(x.value) + parseInt(y.value);
     document.querySelector('.totalNum').innerHTML= "The sum is: " + x.value +"+"+ y.value+"="+ z

     x.value =""
     y.value =""
     z.innerHTML =""
}
// Bulb Off On
function bulbOn() {
     document.querySelector('.bImage').src="images/pic_bulbon.gif"
}
function bulbOff() {
     document.querySelector('.bImage').src="images/pic_bulboff.gif"
}
// Object
let student={
Name : "Rahim",
Age:22,
College: "Dhaka College"
}
console.log(student["Name"] +","+ student.College)
// Object value Push
student.Address = "Dhaka"

console.log(student.Address)





