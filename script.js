document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	button.addEventListener('click', function () {
		renderScene();
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#homePage');
	button.addEventListener('click', function () {
		renderHome();
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#trigger');
	button.addEventListener('click', function () {
		changeImage();
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#homeBottom');
	button.addEventListener('click', function () {
		startGame();
	});
});

function changeImage() {
	var f = document.getElementById('DAP');
	f.innerHTML = '<img src = "img/teaCup.svg">';
}

function renderHome() {
	window.location='/homepage.html';
}

function startGame() {
	window.location='/index.html';
}

function renderScene() {
	var x = document.getElementById('startButton');
	var t = document.getElementById('container');
	var f = document.getElementById('DAP');
	var y = document.getElementsByClassName('item');
	for (var p = 0; p < y.length; p++)
		if (x.innerHTML === 'Off') {
			x.innerHTML = 'On';
			t.style.gridTemplate = `
		'm m m' 1fr
		's s s' 1fr
		'h h h' 1fr
		/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
			y[p].style.color = 'orange';
			f.innerHTML = 'Development Area Programme';
			f.getElementById('gif').id = 'DAP';
		} else {
			x.innerHTML = 'Off';
			t.style.gridTemplate = `
		's m h' 1fr
		's m h' 1fr
		's m h' 1fr
		/ [col-start] 1fr [col-2] 5fr [col-3] 1fr [col-end]`;
			f.innerHTML = '<img src = "img/teaMix.svg">';
			f.getElementById('DAP').id = 'gif';
		}
}