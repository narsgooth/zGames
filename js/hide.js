//init
rHidden = false;
xHidden = true;
Array.prototype.forEach.call(document.getElementsByClassName("x"), function(el) {
	el.style.visibility = "hidden";
});		
//update

const cb2 = document.querySelector('#accept2');
const cb = document.querySelector('#accept');

const btn = document.querySelector('#btn');
btn.onclick = () => {
	if(!cb.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("x"), function(el) {
			el.style.visibility = "hidden";		
			xHidden = true;
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("x"), function(el) {
			el.style.visibility = "visible";
			xHidden = false;
		});
	}
	if(!cb2.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("r"), function(el) {
			el.style.visibility = "hidden";
			rHidden = true;
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("r"), function(el) {
			el.style.visibility = "visible";
			rHidden = false;
		});
	}
};
document.getElementById("playlist").style.visibility = "hidden";
document.getElementById("playButton").style.visibility = "hidden";