export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  img: String;
  subtitulo: String;
  descripcion: String


  constructor(
    nombre: String,
    apellido: String,
    img: String,
    subtitulo: String,
    descripcion: String

  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion
  }
}
