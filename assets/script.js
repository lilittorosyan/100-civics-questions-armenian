//toggle to hide answers

const off = document.getElementById('toggle');

off.addEventListener('click', function(){
	const answers = document.querySelectorAll("ul > li");
	if (this.checked) {
	answers.forEach(element => element.classList.add("hide"));
	answers.forEach(element => element.classList.remove("reveal"));
} else {
	answers.forEach(element => element.classList.add("reveal"));
	answers.forEach(element => element.classList.remove("hide"));
}});

//toggle menu

function toggleMenu() {
  document.getElementById("overlay").style.height = "100%";
}

function closeMenu() {
  document.getElementById("overlay").style.height = "0%";
}

//close manu overlay when linked is clicked

document.querySelectorAll('.overlay-items > a').forEach(element => element.addEventListener('click', () => {
    document.querySelector('#overlay').style.height = "0%";
}));