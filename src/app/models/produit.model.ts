import { Avis } from './avis.model'
import { Categorie } from './categorie.model'
import { Image } from './image.model'

export class Produit {
  public id: string
  public nom: string
  public description: string
  public codeBarre: Number
  public prix: Number
  public poids: string
  public etoile: Number
  public image: Image[]
  public categorie: Categorie
  public avis: Avis[]
  constructor(
    public id1: string,
    public nom1: string,
    public description1: string,
    public codeBarre1: Number,
    public prix1: Number,
    public poids1: string,
    public etoile1: Number,
    public image1: Image[],
    public categorie1: Categorie,
    public avis1: Avis[],
  ) {
    this.id = id1;
    this.nom = nom1;
    this.description = description1;
    this.codeBarre = codeBarre1;
    this.prix = prix1;
    this.poids = poids1;
    this.image = image1;
    this.categorie = categorie1;
    this.avis = avis1;
  }
}
