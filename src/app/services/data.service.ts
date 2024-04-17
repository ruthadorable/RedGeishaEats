import { Injectable } from '@angular/core'
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Produit } from '../models/produit.model'
import { Avis } from '../models/avis.model'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Produit[]> {
    const produitRef = collection(this.firestore, 'produit')
    return collectionData(produitRef, { idField: 'id' }) as Observable<
      Produit[]
    >
  }

  getProductById(id: Number): Observable<Produit> {
    const produit = doc(this.firestore, `produit/${id}`)
    return docData(produit, { idField: 'id' }) as Observable<Produit>
  }

  addProduct(produit: Produit) {
    const produitsRef = collection(this.firestore, 'produits')
    return addDoc(produitsRef, produit)
  }

  deleteNote(produit: Produit) {
    const produitRef = doc(this.firestore, `produits/${produit.id}`)
    return deleteDoc(produitRef)
  }

  updateProduct(produit: Produit) {
    const produitRef = doc(this.firestore, `produits/${produit.id}`)
    return updateDoc(produitRef, {prix: produit.prix, description: produit.description  })
  }

  //is in fact an update review
  addReviewByProductId(avis: Avis,id:Number){
    const produitRef = doc(this.firestore, `produits/${id}`)
    return updateDoc(produitRef, {avis: avis })
  }
}
