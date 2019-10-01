// Es un objeto que representa a los obstaculos
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;//indica cuando danio hace al chocar al jugador
  chocar = function(jugador){
    jugador.perderVidas(this.potencia);  
  };
};