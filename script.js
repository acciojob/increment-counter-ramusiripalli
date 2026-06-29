//your JS code here. If required.

function increment(){
	let counter = document.getElementById("counter");
	counter.textContent = parseInt(counter.innerHTML)+1;
	alert(counter.textContent);
}

const btn = document.getElementById("incrementBtn");
btn.addEventListener("click",increment)
