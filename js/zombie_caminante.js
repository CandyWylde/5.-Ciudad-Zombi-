// Aca se encuentra al zombie caminante, este zombie recibe los mismos parametros que el objeto Enemigo 
var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  // ZombieCaminante llama al constructor de Enemigo utilizando los parametros necesarios
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
};

//le indico a que cadena de prototipo se debe conectar
ZombieCaminante.prototype = Object.create(Enemigo.prototype);
//le reasigno su propio constructor 
ZombieCaminante.prototype.constructor = ZombieCaminante; 
// le agrego la funcion mover
ZombieCaminante.prototype.mover = function() { 
  if (Math.random() < 0.5) { // Los movimientos estan basados en un numero aleatorio
    this.x -= this.velocidad;
    this.y -= this.velocidad;
  } 
  else { 
    this.y += this.velocidad;
    this.x -= this.velocidad;
  }
  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
};

// El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar haciendole perder 1 vida al jugador
//Si se quiere modificar el valor de ataque del zombie caminante, habra que reimplementar este metodo
ZombieCaminante.prototype.atacar = function (jugador) {
  jugador.perderVidas(2);
};
