var char,charecter,charImg,charImg2,b3,array,rockGroup,npc,npco


function preload()
{
 
  charImg = loadImage("images/char.png");
  
}
;
function setup() {
  createCanvas(1200, 600);  
  char = new Charecter(50,50);
  charecter = createSprite(char.spwanPosX,char.spwanPosY,100,100);
  charecter.addImage("down",charImg);
  rockGroup = new Group();
  scene(b3);
 
}   



function draw() { 
  background(239,228,176); 
  char.draw(b3);
  charecter.debug=true;
  npco.draw(b3);
  
  drawSprites();
  

}
function scene(array){
  array.rocks.forEach(element => {
    var rock = createSprite(element[0],element[1],100,100)
    rock.debug=true;
  });
  array.npc.forEach(element => {
    npco =  new Npc(element[0],element[1]);
    npc = createSprite(npco.spwanPosX,npco.spwanPosY,100,100)
    npc.shapeColor=color(255,0,0);
    npc.debug= true;
  });
}

