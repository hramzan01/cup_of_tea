document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	button.addEventListener('click', function () {
		renderScene();
	});
});

function renderScene() {
	document.getElementById('startButton').innerHTML = 'Off';
	document.getElementById('container').style.gridTemplate = `
'm m m' 1fr
's s s' 1fr
'h h h' 1fr
/ [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end]`;
}
