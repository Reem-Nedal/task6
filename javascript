/* arra[0].style.backgroundColor=('blue'); */ 

var arra=document.getElementById("classone").getElementsByTagName("div");
var varresult= document.getElementById("result");
for(i=0;i<arra.length;i++) {
	
arra[i].addEventListener("click",theresult);
}

function theresult(){

	varresult.innerHTML="true"
}

/* function changecolors(){
	
	arra[0].style.backgroundColor=('blue'); 
} */



/* 
 function changeColors(color){
for (var i = 0; i < length; i++) {
  arra[i].style.background = color;
}
function random(){
	
	
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
	} */
