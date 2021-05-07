var BgImg, bg;
var tomImg1, tomImg2, tomImg3, tom;
var jerryImg1, jerryImg2, jerryImg3, jerry;

function preload() {
    //load the images here
    BgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png");
    tomImg3 = loadAnimation("images/cat3.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png");
    jerryImg3 = loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;


}

function draw() {

    background(BgImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("tomLastImage",tomImg3);
        tom.changeAnimation("tomRunning");
        tom.velocityX=0;
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("jerryTeasing",jerryImg2);
      jerry.changeAnimation("jerryTeasing");
      jerry.frameDelay = 25;

      tom.velocityX = -5;
      tom.addAnimation("tomRunning", tomImg2);
      tom.changeAnimation("tomRunning")
  }

}
