function setup() {
    Canvas = createCanvas(530, 580);
    Canvas.position(500, 80);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 65, 120, 400, 300);
    line(0, 60, 590, 60);
    line(0, 480, 590, 480);
    line(50, 0, 50, 520);
    line(480, 0, 480, 520);
}
function takeSnap() {
    save('Celebration_Picture.png');
}