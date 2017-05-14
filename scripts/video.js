// JavaScript Document

// Video buttons
function av1btn() {
	document.getElementById('av1').style.display = 'block'; // show english version
		document.getElementById('av2').style.display = 'none'; // hide german version
		document.getElementById('av3').style.display = 'none'; // hide french version
}

function av2btn() {
	document.getElementById('av2').style.display = 'block'; // show german version
		document.getElementById('av1').style.display = 'none'; // hide english version
		document.getElementById('av3').style.display = 'none'; // hide french version
}

function av3btn() {
	document.getElementById('av3').style.display = 'block'; // show french version
		document.getElementById('av1').style.display = 'none'; // hide english version
		document.getElementById('av2').style.display = 'none'; // hide german version
}

function sv1btn() {
	document.getElementById('sv1').style.display = 'block'; // show english version
		document.getElementById('sv2').style.display = 'none'; // hide german version
		document.getElementById('sv3').style.display = 'none'; // hide french version
		$("#v1s")[0].src += "&autoplay=1";
}

function sv2btn() {
	document.getElementById('sv2').style.display = 'block'; // show german version
		document.getElementById('sv1').style.display = 'none'; // hide english version
		document.getElementById('sv3').style.display = 'none'; // hide french version
}

function sv3btn() {
	document.getElementById('sv3').style.display = 'block'; // show french version
		document.getElementById('sv1').style.display = 'none'; // hide english version
		document.getElementById('sv2').style.display = 'none'; // hide german version
}
