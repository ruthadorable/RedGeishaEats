import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Roles, Utilisateur } from 'src/app/models/utilisateur.model'
import { ApiService } from 'src/app/services/api/api.service'
import { StorageService } from 'src/app/storage/storage.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  saltRounds = 10

  constructor(
    private storage: StorageService,
    private fireAuth: AngularFireAuth,
    private apiService: ApiService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await this.fireAuth.signInWithEmailAndPassword(
        email,
        password,
      )
      console.log(response)
      if (response.user) {
        this.setUserData(response.user.uid)
      }
    } catch (e) {
      throw e
    }
  }

  async getId() {
    return (await this.storage.getStorage('uid')).value
  }

  setUserData(uid) {
    this.storage.setStorage('uid', uid)
  }

  async register(formValue) {
    try {
      const registeredUser = await this.fireAuth.createUserWithEmailAndPassword(
        formValue.email,
        formValue.password,
      )
      console.log('registered user: ', registeredUser)
      //pwd can't be saved in db!!!
      const data = new Utilisateur(
        formValue.email,
        formValue.phone,
        formValue.name,
        null,
        registeredUser.user.uid,
        Roles.User,
        'active',
      )
      await this.apiService
        .collection('users')
        .doc(registeredUser.user.uid)
        .set(Object.assign({}, data))
      await this.setUserData(registeredUser.user.uid)
    } catch (e) {
      throw e
    }
  }

  async resetPassword(email: string) {
    try {
      await this.fireAuth.sendPasswordResetEmail(email)
    } catch (e) {
      throw e
    }
  }

  async logout() {
    try {
      await this.fireAuth.signOut()
      return this.storage.removeStorage('uid')
    } catch (e) {
      throw e
    }
  }

  async updateEmail(oldEmail, newEmail, password) {
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(
        oldEmail,
        password,
      )
      await result.user.updateEmail(newEmail)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
