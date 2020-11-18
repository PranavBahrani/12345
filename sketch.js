var dog, happyDog, database, foodS, foodStock

function preload()
{
	dog = loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database()
  dog = createSprite(200,200,50,50)
}


function draw() {  

  drawSprites();
  //add styles here

}



