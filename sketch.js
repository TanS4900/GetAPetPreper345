var START = 0
var DOG = 1
var CAT = 1
var HAMSTER = 1
var FISH = 1
var BIRD = 1
var END = 0

var startButton,dog,cat,hamster,bird,fish,choosePet
var startButtonIMG,dogImage,catImage,hamsterImage,birdImage,fishImage,choosePetImage


function preload() {

startButtonIMG = loadImage("Images/spriteStartButton.png")
dogImage = loadImage("Images/DoggieSprite.png")
catImage = loadImage("Images/kittySprite.png")
hamsterImage = loadImage("Images/SpriteHamsterEgg.png")
birdImage = loadImage("Images/birdSprite33.png")
fishImage = loadImage("Images/fishBowlSprite.png")



}




function setup() {
createCanvas(800,800);
startButton = createSprite(400,400,50,10);
   dog = createSprite(360,180,30,30);
   bird = createSprite(400,180,30,30);
   cat = createSprite(440,180,30,30);
   hamster = createSprite(480,180,30,30);
   fish = createSprite(320,180,30,30);

   dog.addImage(dogImage)
cat.addImage(catImage)
startButton.addImage(startButtonIMG)
hamster.addImage(hamsterImage)
bird.addImage(birdImage)
fish.addImage(fishImage)

dog.scale = 0.2 
cat.scale = 0.07
hamster.scale = 0.09
bird.scale = 0.09
fish.scale = 0.09
startButton.scale = 0.3
}

function draw() {
  background("yellow");  
  
  if(mousePressedOver(startButton)) {

    background("lime")
    startButton.visible = false 


  }
 
  if(mousePressedOver(dog)) {

   gameState = DOG
   cat.visible = false
   bird.visible = false
   hamster.visible = false
   fish.visible = false
  }

  if(mousePressedOver(cat)) {

   gameState = CAT
   dog.visible = false
   bird.visible = false
   hamster.visible = false
   fish.visible = false
  }

  if(mousePressedOver(bird)) {

   gameState = BIRD
   dog.visible = false
   cat.visible = false
   hamster.visible = false
   fish.visible = false
  }

  if(mousePressedOver(hamster)) {
 
   gameState = HAMSTER
   dog.visible = false
   bird.visible = false
   cat.visible = false
   fish.visible = false

  }

  if(mousePressedOver(fish)) {

   gameState = FISH
   dog.visible = false
   bird.visible = false
   cat.visible = false
   hamster.visible = false

  }

  drawSprites();
}







