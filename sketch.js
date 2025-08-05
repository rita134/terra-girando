function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(234, 366; //cor de fundo preta
  rotateY(millis()/995); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(120, 140); //esfera 3D
  
  
}
