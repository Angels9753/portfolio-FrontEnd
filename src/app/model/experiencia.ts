export class Experiencia {
  id?: number;
  institucionEx: String;
  cargoEx: String;
  descripcionEx: String;
  desdeHastaEx: String;
  iconoEx: String;

  constructor(
    institucionEx: String,
    cargoEx: String,
    descripcionEx: String,
    desdeHastaEx: String,
    iconoEx: String
  ) {
    this.institucionEx = institucionEx;
    this.cargoEx = cargoEx;
    this.descripcionEx = descripcionEx;
    this.desdeHastaEx = desdeHastaEx;
    this.iconoEx = iconoEx;
  }
}
