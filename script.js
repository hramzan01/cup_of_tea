document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.svg').addEventListener('click', () => {
		if (!sfx.laugh.playing()) {
			sfx.laugh.play();
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	var container = document.querySelector('#container');
	button.addEventListener('click', function () {
		renderScene();
	});
});

function renderScene() {
	document.getElementById('startButton').innerHTML =
		'This description has now been changed by a script!';
	document.getElementById('container').style.gridTemplate = `
'h h h' 1fr
'i i m' 1fr
's s s' 1fr
/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
}

functiontgl();
{
	var t = document.getElementById('myBtn');
	if (t.value == 'ON') {
		t.value = 'OFF';
	}
	elseif(t.value == 'OFF');
	{
		t.value = 'ON';
	}
}
