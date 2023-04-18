//Para criar um canva do fabric.js, utilize o código 'new fabric.Canvas'
var canvas = new fabric.Canvas('myCanvas');

 var playerX = 10;
 var playerY = 10;
blockImageWidth = 30;
blockImageHeight = 30;
var playerObject= "player.png";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown); 

function myKeyDown(e) //Precisamos definir a função myKeyDown para que possamos ver qual tecla foi pressionada
{
keyPressed = e.keyCode; //  "e.keyCode" obterá o valor da tecla pressionada. Armazenaremos-o dentro da variável keyPressed
console.log(keyPressed); // mostre no console a variável da linha 51
if(e.shiftKey == true && keyPressed == '80')
//e.shiftKey == true significa que a tecla SHIFT foi pressionada.
//keyPressed == 80 significa que a tecla P foi pressionada.
{
	console.log("p e shift pressionadas juntas");
	blockImageWidth = blockImageWidth + 10; // qual quantidade você quer que seja aumentada?
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth; // resposta no html
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87') // w na tabela ascii
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')// g na tabela ascii
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(playerY >=0) 
	{
		playerY = playerY - blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate(); // função que adiciona uma nova imagem no canvas
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();
	}
}
