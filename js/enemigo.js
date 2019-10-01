// Enemigo sera un objeto que tiene las funcionalidades basicas de todo Enemigo en el juego. 
var Enemigo = function (sprite, x, y, ancho, alto, velocidad, rangoMov) {
  this.sprite = sprite; //sprite: contiene la ruta a la imagen que lo representa.
  this.x = x; //x: posicion x actual del enemigo en el mapa
  this.y = y; //y: posicion y actual del enemigo en el mapa
  this.ancho = ancho; //ancho: el ancho del enemigo
  this.alto = alto; //alto: el alto del enemigo
  this.velocidad = velocidad; // es la velocidad de movimiento, pixeles que podra moverse en cada mov
  this.rangoMov = rangoMov; //rangoMov: los limites en el mapa donde se puede mover, con la siguiente forma: 
  //{desdeX: valor, hastaX: valor, desdeY: valor, hastaY: valor}
  this.atacando = false;
}
// Por defecto, un enemigo sabe responder al mensaje de atacar sacando una vida al jugador.
Enemigo.prototype.atacar = function (jugador) {
  jugador.perderVidas(1);
}
/* Este metodo sirve para no estar atacando continuamente al jugador. Solo va a
atacar si no estaba atacando previamente. Esto lo va a indicar la propiedad atacando*/
Enemigo.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}
/* Cuando el enemigo no este en contacto con el jugador, se utilizara el metodo
dejarDeAtacar para modificar la propiedad atacando*/
Enemigo.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}