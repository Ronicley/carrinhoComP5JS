
function Carrinho() {
  this.location = createVector(width/2, height/2);
 
  this.dim = 20;
  this.hdim = this.dim / 2;

  
	this.moverFrente = function(){
  		this.location.add(0,-2);
    	
  }
  this.moverTras = function(){
  	this.location.add(0,2);
    
  }
  this.moverDireita = function(){
  	this.location.add(2,0);
  }
  this.moverEsquerda = function(){
  	this.location.add(-2,0);
  }
  // Movimento 101: desenha a bola na tela
  this.display = function(direcao) { 
    
    stroke(0);
    fill(0);    
    rect(this.location.x-6, this.location.y, this.dim/3, this.dim/2);
    rect(this.location.x+29, this.location.y, this.dim/3, this.dim/2);
    rect(this.location.x-6, this.location.y+29, this.dim/3, this.dim/2);
		rect(this.location.x+29, this.location.y+29, this.dim/3, this.dim/2);
    fill(255,0,0);
    rect(this.location.x, this.location.y, this.dim*1.5, this.dim*2);
    fill(0)
    rect(this.location.x+5, this.location.y+9, this.dim, this.dim-10)    
   
  }

  
}

var bola;

function setup() {
  createCanvas(500, 500);
  smooth();
  carrinho = new Carrinho();
 
}

function draw() {
  background(255);
  carrinho.display(radians(0))
   if(key == 'w'){
  	carrinho.display(radians(0));
    carrinho.moverFrente();
	} else  if(key == 's'){
  	carrinho.display(radians(270));
    carrinho.moverTras();
	}else if(key == 'a'){
    carrinho.display(radians(180));
    carrinho.moverEsquerda();
  }else if(key == 'd'){
    carrinho.display(radians(90));
    carrinho.moverDireita();
  }
}
