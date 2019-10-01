// El objeto jugador es un objeto literal

var anchoAuto=15; // para que sea mas sesillo modificar el tamaño del auto
var largoAuto=30; // para que sea mas sesillo modificar el tamaño del auto

var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: anchoAuto,
  alto: largoAuto,
  velocidad: 10,
  vidas: 5,
  mover(movX, movY){
    this.x += movX;
    this.y += movY;
    if (movX>0){
      this.sprite = 'imagenes/auto_rojo_derecha.png';
      this.alto= anchoAuto;
      this.ancho= largoAuto;
    }
    else if (movX<0){
      this.sprite = 'imagenes/auto_rojo_izquierda.png';
      this.alto= anchoAuto;
      this.ancho= largoAuto;
    }
    else if (movY<0){
      this.sprite = 'imagenes/auto_rojo_arriba.png';
      this.alto= largoAuto;
      this.ancho= anchoAuto;
    }
    else if (movY>0){
      this.sprite = 'imagenes/auto_rojo_abajo.png';
      this.alto= largoAuto;
      this.ancho= anchoAuto;
    }
  },
  perderVidas(cantVidas){
    this.vidas -= cantVidas;
  },
};
