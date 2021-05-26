var bgImg;
var cat,mouse;
var catImg1,mouseImg1,mouseImg2;


function preload() {
    //load the images here
    bgImg=loadImage()
 catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,100,60,30);
    cat.addImage(catImg);
    mouse=createSprite(500,100,60,30);
    mouse.addImage(mouseImg);
}

function draw() {  
createCanvas(1000,800);
    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width-mouse.width)/2){
 
}
keyPressed();
 drawSprites();
}


function keyPressed(){


  //For moving and changing animation write code here
if(keyCode=== RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2)
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay=25;
}

if(keyCode=== LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25;
}  
    
    





}


