export class Estudio {
    id?: number;
    institucionEs: String;
    tituloEs: String;
    desdeHastaEs: String;
    urlLogoEs: String;
  
    constructor(
      institucionEs: String,
      tituloEs: String,
      desdeHastaEs: String,
      urlLogoEs: String
    ) {
      this.institucionEs = institucionEs;
      this.tituloEs = tituloEs;
      this.desdeHastaEs = desdeHastaEs;
      this.urlLogoEs = urlLogoEs;
    }
  }
  