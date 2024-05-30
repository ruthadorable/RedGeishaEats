import { Role } from './role.model'

export class Utilisateur {
  public constructor(
    public email?: string,
    public gsm?: string,
    public nom?: string,
    public prenom?:string,
    public password?: string,
    public uid?: string,
    public role?: string,
  ) {}
}

export enum Roles {
  Admin = 'administrateur',
  User = 'utilisateur',
  Livreur = 'livreur',
}
