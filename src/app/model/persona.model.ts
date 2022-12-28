export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  subtitulo: string;
  descripcion: string


  constructor(
    nombre: string,
    apellido: string,
    img: string,
    subtitulo: string,
    descripcion: string

  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion
  }
}
