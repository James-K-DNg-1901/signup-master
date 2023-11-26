var element = document.getElementsByTagName("input");
var warningTag = document.getElementsByTagName("em");
var submit = document.getElementById("submit");
//email id expression code
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function fun1 () {	
	for (let i = 0; i < 4; i++) {
		if (element[i].value == "") {
			element[i].classList.add("error");
			warningTag[i].style.visibility = "visible";
		}
		else {
			element[i].classList.remove("error");
			warningTag[i].style.visibility = "hidden";
		}
	}
}
submit.addEventListener("click", fun1);