import { Role } from './role.model'

export class Utilisateur {
  public id: Number
  public prenom: string
  public nom: string
  public username: string
  public email: string
  public password: string
  public role!: Role

  public constructor(
    prenom: string,
    nom: string,
    username: string,
    email: string,
    password: string,
  ) {
    this.prenom = prenom
    this.nom = nom
    this.username = username
    this.email = email
    this.password = password
  }
}

export enum Roles {
  Admin = 'administrateur',
  User = 'utilisateur',
  Livreur = 'livreur',
}
