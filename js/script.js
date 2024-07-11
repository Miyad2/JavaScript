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
function sObject(){
  let student={
Name : "Rahim",
Age:22,
College: "Dhaka College"
}
document.querySelector('.sObject').innerHTML= student["Name"] +","+ student.College
console.log(student["Name"] +","+ student.College)
// Object value Push
student.Address = "Dhaka"
console.log(student.Address)   
}
//
function nDate() {
     var x = new Date()
     document.querySelector('.nDate').innerHTML=x.getDate()
}
//
function nMonth() {
     var x = new Date()
     document.querySelector('.nMonth').innerHTML=x.getMonth()+1
}
//
function nMinutes() {
     var x = new Date()
     document.querySelector('.nMinutes').innerHTML=x.getMinutes()
}
//
function nHours() {
     var x = new Date()
     document.querySelector('.nHours').innerHTML=x.getHours()-12
}

//
function bgCLr(){
     document.querySelector('.bgCLr').style.background="red"
}
//
function fSize(){
     document.querySelector('.fSize').style.fontSize="22px"
}
//
function fStyle(){
     document.querySelector('.fStyle').style.fontStyle="italic"
}
//
function fWeight(){
     document.querySelector('.fWeight').style.fontWeight="700"
}
//
function Ope1(){
  var a = 5
var b=9
b+=a   
 document.querySelector('.Ope1').innerHTML=b
}
//
function Ope2(){
  var a = 5
var b=9
b-=a   
 document.querySelector('.Ope2').innerHTML=b
}
//
function Ope3(){
  let a = 5
  let b=9
let result = b>a   
 document.querySelector('.Ope3').innerHTML=result
}
//
function Ope4(){
  let a = 5
  let b=9
if (a>b) {
     document.querySelector('.Ope4').innerHTML=a+ "is grater than" + b
} else {
     document.querySelector('.Ope4').innerHTML=b+ " is grater than " +a
}
}
//
function tLength(){
     let text ="Lorem ipsum dolor sit amet."
     document.querySelector('.nLength').innerHTML=text.length
}
//
function con(){
     const text ="Lorem ipsum dolor sit amet."
     document.querySelector('.con').innerHTML=text
}
//
function eLet(){
     const text ="Lorem ipsum dolor sit amet."
     document.querySelector('.eLet').innerHTML=text
}
//
function multi(){
     let a = 5
     let b =7
    let result = b*a
     document.querySelector('.multi').innerHTML=result
}
//
function divi(){
     let a = 35
     let b =7
    let result = a/5
     document.querySelector('.divi').innerHTML=result
}
//
function substraction(){
     let a = 35
     let b =7
    let result = a-5
     document.querySelector('.substraction').innerHTML=result
}
//
function modu(){
     let a = 36
     let b =7
    let result = a%b
     document.querySelector('.modu').innerHTML=result
}
//
function sum(){
     let a = 36
     let b =7
    let result = a+b
     document.querySelector('.sum').innerHTML=result
}
//
function ope5(){
     let a = 36
     let b =7
     b*=a
     document.querySelector('.ope5').innerHTML=b
}
//
function ope6(){
     let a = 36
     let b =7
     b/=a
     document.querySelector('.ope6').innerHTML=b
}
//
function ope7(){
     document.querySelector('.ope7').style.textShadow="1px 1px 1px"
}
//
function ope8(){
     document.querySelector('.ope8').innerHTML= "Hello "+" There"
}
//
function ope9(){
let text = "Lorem ipsum dolor sit amet."
     document.write(text)
}
//
function ope10(){
let text = "Lorem ipsum dolor sit amet."
    window.print(text)
}
//
function tAlign() {
     document.querySelector('.tAlign').style.marginLeft="50px"
}
//
function tAlignR() {
     document.querySelector('.tAlignR').style.paddingRight="50px"
}
//
function tAlignT() {
     document.querySelector('.tAlignT').style.marginTop="50px"
}
//
function tAlignB() {
     document.querySelector('.tAlignB').style.paddingTop="50px"
}



// JQuery
$(document).ready(function(){
     $(".jqeBtn").click(function(){
          alert("Hello")
     })
})



