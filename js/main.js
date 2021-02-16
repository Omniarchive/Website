window.onscroll = checkscroll;

function checkscroll() {
	topbar = document.getElementsByClassName("topbar")[0];
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

function homevideos() {
	$.getJSON("/ytapi.php", function(data){
		for(i=0; i<3; i++) {
			div_videa.innerHTML+="<a target='_blank' href=http://youtube.com/watch?v="+data.items[i].id.videoId+"><div class=vid style='background-image: url("+data.items[i].snippet.thumbnails.high.url+");'><div>"+data.items[i].snippet.title+"</div></div></a>";	
		}
	});
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function jsontohash(data) {
	return b64EncodeUnicode(JSON.stringify(data));
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}