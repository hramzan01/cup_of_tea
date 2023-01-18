document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	button.addEventListener('click', function () {
		renderScene();
	});
});

function renderScene() {
	var x = document.getElementById('startButton');
	var t = document.getElementById('container');
	var i = document.getElementById('itch');
	vat y = document.getElementsByClassName('item')
	if (x.innerHTML === 'Off') {
		x.innerHTML = 'On';
		i.style.backgroundColor = 'green';
		t.style.gridTemplate = `
	'm m m' 1fr
	's s s' 1fr
	'h h h' 1fr
	/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
	} else {
		x.innerHTML = 'Off';
		i.style.backgroundColor = 'blue';
		t.style.gridTemplate = `
	's m h' 1fr
	's m h' 1fr
	's m h' 1fr
	/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
	}
}
