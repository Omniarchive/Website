window.onscroll = checkscroll;

function checkscroll() {
	var topbar = document.getElementsByClassName("topbar")[0];
	if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {topbar.className = topbar.className.replace(" small","")+" small";}
	else {topbar.className = topbar.className.replace(" small","");}
}

function scrolltopage() {
	document.querySelector('#firsttextblock').scrollIntoView({ 
		behavior: 'smooth' 
	});
}

function opensidebar() {
	document.getElementsByClassName("menu")[0].className = "menu open";
	document.getElementById("menumask").className = "open";
}
function closesidebar() {
	document.getElementsByClassName("menu")[0].className = "menu";
	document.getElementById("menumask").className = "";
}