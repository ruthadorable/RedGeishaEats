import { Avis } from './avis.model'
import { Categorie } from './categorie.model'
import { Produit } from './produit.model'
import { Image } from './image.model'

export class Promotion extends Produit {
    public percent: Number;
  constructor(
    public id: string,
    public nom: string,
    public description: string,
    public codeBarre: Number,
    public prix: Number,
    public poids: string,
    public etoile: Number,
    public image: Image[],
    public categorie: Categorie,
    public avis: Avis[],
    public percent1: Number
  ) {
    super(
      id,
      nom,
      description,
      codeBarre,
      prix,
      poids,
      etoile,
      image,
      categorie,
      avis,
    )
    this.percent = percent1;
  }
}
