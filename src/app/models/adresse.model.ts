export class Adresse {
  public rue: string
  public numero: Number
  public codePostal: Number
  public commune: string
  public gsm: string
  constructor(
    public rue1: string,
    public numero1: Number,
    public codePostal1: Number,
    public commune1: string,
    public gsm1: string,
  ) {
    this.rue = rue1
    this.numero = numero1
    this.codePostal = codePostal1
    this.commune = commune1
    this.gsm = gsm1
  }
}
