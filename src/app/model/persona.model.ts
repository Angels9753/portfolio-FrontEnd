export class persona {
  id?: number;
  nombre: String;
  apellido: String;
  img: String;
  subtitulo: String;
  descripcion: String;
  usr: String;
  password: String;
  admin: boolean;

  constructor(
    nombre: String,
    apellido: String,
    img: String,
    subtitulo: String,
    descripcion: String,
    usr: String,
    password: String,
    admin: boolean
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion;
    this.usr = usr;
    this.password = password;
    this.admin = admin;
  }
}
