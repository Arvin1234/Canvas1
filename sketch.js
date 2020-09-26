function setup(){
    createCanvas(500,500);
}

function draw(){
    background("white");
    if(mousePressed){
        mouse.drag = true;
    }
    else if(mouseReleased){
        mouse.drag = false;
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
