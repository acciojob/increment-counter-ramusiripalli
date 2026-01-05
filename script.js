//your JS code here. If required.

function counter(){
	const counter = document.getElementById("counter");
	counter.innerHTML = Number(counter.innerHTML) + 1;
}


const btn = document.getElementById("incrementBtn");
btn.addEventListener("click",counter);



