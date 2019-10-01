//se encarga de manipular el canvas y hacer todo lo necesario para poder pintar en la pantalla
var Dibujante = { 
  canvas: document.createElement('canvas'),

  borrarAreaDeJuego: function () {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);},

  inicializarCanvas: function (anchoCanvas, altoCanvas) {
    this.canvas.width = anchoCanvas;
    this.canvas.height = altoCanvas;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);},

  dibujarImagen: function (ruta, x, y, ancho, alto) { //Dibuja una imagen a partir de su ruta, en la posicion x, y
    var imagen = Resources.get(ruta);
    this.canvas.getContext('2d').drawImage(imagen, x, y, ancho, alto);},

  dibujarEntidad: function (entidad) { //Dibuja una entidad que sepa responder a los mensajes: sprite, x, y, ancho y alto
    this.dibujarImagen(entidad.sprite, entidad.x, entidad.y, entidad.ancho, entidad.alto);},

  dibujarRectangulo: function (color, x, y, ancho, alto) {
    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);},
}

