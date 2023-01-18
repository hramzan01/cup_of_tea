document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	button.addEventListener('click', function () {
		renderScene();
	});
});

function renderScene() {
	var x = document.getElementById('startButton');
	var t = document.getElementById('container');
	var f = document.getElementById('DAP')
	var y = document.getElementsByClassName('item')
	for(var p=0; p<y.length; p++)
	if (x.innerHTML === 'Off') {
		x.innerHTML = 'On';
		t.style.gridTemplate = `
		'm m m' 1fr
		's s s' 1fr
		'h h h' 1fr
		/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
		y[p].style.backgroundColor = 'red';
		f.innerHTML = 'Development Area Programme'
	} else {
		x.innerHTML = 'Off';
		t.style.gridTemplate = `
		's m h' 1fr
		's m h' 1fr
		's m h' 1fr
		/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
		y[p].style.backgroundColor = 'green';
		f.innerHTML = '<img src = "img/1_2X4kX8wkfbtBFu9Zack_IA.gif">'
	}
}
