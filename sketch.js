var bordas, solo, soloInvisivel;
var imagemDoSolo;
var fundo,sol, solImg;
var meninaImg;
var menina;
var ladra;
var ladraImg;
var casa1,casa2,casa3,casa4,casa5,casa6;
var casa1Img,casa2Img,casa3Img,casa4Img,casa5Img,casa6Img;
var choc,chocImg;
var grupoChoc;
var moedaImg,grupoMoeda,moeda;




var JOGAR = 1;
var ENCERRAR = 0;
var estadoJogo= JOGAR;

function preload(){
  
  fundo = loadImage('fundocor.png');
  solImg = loadImage('solcor.png');
  meninaImg = loadAnimation('1.png','2.png','4.png'); 
  ladraImg = loadAnimation('ladra1.png','ladra2.png');
  casa1Img = loadImage ('casa1.png');
  casa2Img = loadImage ('casa2.png');
  casa3Img = loadImage ('casa3.png');
  casa4Img = loadImage ('casa4.png');
  casa5Img = loadImage ('casa5.png');
  casa6Img = loadImage ('casa6.png');
  chocImg = loadImage ('choc.png');
  moedaImg = loadImage ('moeda.png');
  
  
  //carregar imagem do solo
  imagemDoSolo = loadImage("solocor.png");
  
  //carregar imagem da nuvem

  
  
 
  
  
}

function setup(){
  
  //cria a tela
  createCanvas(900,400);
  
  menina = createSprite(400,270);
  menina.addAnimation("running",meninaImg);
  menina.scale =0.5;


  ladra = createSprite(100,270);
  ladra.addAnimation("ladrarunning",ladraImg);
  ladra.scale = 1.7;
  ladra.velocity.x = 1


  sol = createSprite(50,40);
  sol.addImage('sol', solImg);
  sol.scale = 0.3;
  
  //cria solo
  solo = createSprite(200,380,400,20);
  //adiciona imagem de solo
  solo.addImage("solo", imagemDoSolo)
  solo.x = width/2;
  solo.scale = 0.6;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  //cria solo invisível
  soloInvisivel = createSprite(300,height-10,600,10);
  soloInvisivel.visible = false;
  
  grupoChoc = new Group();
  grupoMoeda = new Group();
  
  
  

}

function draw(){
  //fundo branco
  background(fundo);
  
  solo.velocityX = -8;
  
  
  if (estadoJogo === JOGAR) {
    
    solo.velocityX = -8;


    //faz o solo voltar ao centro se metade dele sair da tela
  if (solo.x<0){
    solo.x=width/2;
 }

    if (ladra.x>900){
      ladra.x=100;
   }

   if (solo.x<0){
    solo.x=width/2;
 }

 //faz o solo voltar ao centro se metade dele sair da tela
 if (solo.x<0){
  solo.x=width/2;
}

if (keyDown(UP_ARROW)) {
 menina.y = menina.y -3
}
casas();
gerarChoc();
gerarMoeda();
 //desenha os sprites  

 

 if (grupoChoc.isTouching(menina)) {
   menina.velocityX = 10;
   
 }
 

  } else if(estadoJogo === ENCERRAR) {
    
    if (ladra.isTouching(menina)) {
      estadoJogo = ENCERRAR;
      gameOver();
      
    }
  }

  
  
   
   
    drawSprites();  
  
}

function casas() {
if (frameCount % 40 ===0) {
  var casa = createSprite(Math.round(random(0,400)),270,10,40);
  casa.velocity.x = -3;


  var rand = Math.round(random(1,6));

  switch (rand) {
    case 1: casa.addImage(casa1Img);  
    casa.scale = 0.3;    
      break;
    case 2: casa.addImage(casa2Img);   
      casa.scale = 0.3;  
      break;
    case 3: casa.addImage(casa3Img);  
    casa.scale = 0.3;    
      break;
    case 4: casa.addImage(casa4Img);  
    casa.scale = 0.3;    
      break;
    case 5: casa.addImage(casa5Img);  
    casa.scale = 0.3;    
      break;
    case 6: casa.addImage(casa6Img);  
    casa.scale = 0.3;    
      break;
    default:
      break;
  }
  casa.scale = 2.0;
  casa.depth = menina.depth;
  menina.depth= menina.depth +1;

  ladra.depth = casa.depth;
  ladra.depth = ladra.depth +1;

}
  
  

}

function gerarChoc() {  
  if (frameCount % 40 === 0) {
    choc = createSprite(Math.round(random(0,width)),30,30,30);
    choc.addImage(chocImg);
    choc.velocity.y = 5;
    grupoChoc.add(choc);
    choc.scale = 0.1;
    
  }

  
}

function gerarMoeda() {
  if (frameCount % 40 ===0) {
    moeda = createSprite(Math.round(random(0,width)),30,30,30);
    moeda.addImage(moedaImg);
    moeda.velocity.y = 5;
    grupoMoeda.add(moeda);
    moeda.scale = 0.1;
    
  }
}