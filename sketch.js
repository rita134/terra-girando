function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(0, 0; //cor de fundo preta
  rotateY(millis()/995); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(140, 160); //esfera 3D
  
  
}
