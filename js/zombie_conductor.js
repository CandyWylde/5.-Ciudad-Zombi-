//El zombiConductor hace referencia a los trenes en movimiento
var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  // ZombieConductor llama al constructor de Enemigo utilizando los parametros necesarios
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion=direccion; //parámetro propio de zombiConductor
};

//le indico a que cadena de prototipo se debe conectar
ZombieConductor.prototype = Object.create(Enemigo.prototype); 
//le reasigno su propio constructor
ZombieConductor.prototype.constructor = ZombieConductor;
// le agrego la funcion mover
ZombieConductor.prototype.mover = function() {
  switch (this.direccion){
    case 'h':
      this.x -= this.velocidad;
      break;
    case 'v':
      this.y += this.velocidad;
      break;
  };
   /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX) || (this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }
};
// El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar haciendole perder 1 vida al jugador
//Se debe reimplementar este metodo para que el ataque sea letal
ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(jugador.vidas);
};