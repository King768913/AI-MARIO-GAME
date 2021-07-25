function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);

canvas.parent('canvas');
	
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(700, 500);
}

function draw() {
	game()
}






