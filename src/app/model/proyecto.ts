export class Proyecto {
    id?: number;
    institucionPr: String;
    subtituloPr: String;
    descripcionPr: String;
    webPr: String;
    urlLogoPr: String;
  
    constructor(
      institucionPr: String,
      subtituloPr: String,
      descripcionPr: String,
      webPr: String,
      urlLogoPr: String
    ) {
      this.institucionPr = institucionPr;
      this.subtituloPr = subtituloPr;
      this.descripcionPr =descripcionPr;
      this.webPr = webPr;
      this.urlLogoPr = urlLogoPr;
    }
  }
  