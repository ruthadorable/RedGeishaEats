import { Produit } from './produit.model'
import { Avis } from './avis.model'

export class Commande {
  public id: string
  public total: number
  public etat: Etat
  public paid: boolean
  public avis: Avis[]
  public message: string
  public produits: Produit[]
  constructor(
    public id1: string,
    public total1: number,
    public etat1: Etat,
    public paid1: boolean,
    public avis1: Avis[],
    public message1: string,
    public produits1: Produit[],
  ) {
    this.id = id1
    this.total = total1
    this.etat = etat1
    this.paid = paid1
    this.avis = avis1
    this.message = message1
    this.produits = produits1
  }
}
export enum Etat {
  Preparation = 'In preparation',
  Done = 'Ready for delivery',
  Arriving = 'Arriving to destination',
  Delivered = 'Delivered',
  Closed = 'Closed',
}
