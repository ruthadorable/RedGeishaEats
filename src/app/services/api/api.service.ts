import { Injectable } from '@angular/core'
import { Adresse } from 'src/app/models/adresse.model'
import { Categorie } from 'src/app/models/categorie.model'
import { Produit } from 'src/app/models/produit.model'
import { Commande } from 'src/app/models/commande.model'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Item } from 'src/app/models/item.model'
import { Order } from 'src/app/models/order.model'
import { Address } from 'src/app/models/address.model'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private adb: AngularFirestore) {}

  collection(path) {
    return this.adb.collection(path)
  }

  banners = [
    { banner: 'assets/imgs/1.jpg' },
    { banner: 'assets/imgs/2.jpg' },
    { banner: 'assets/imgs/3.jpg' },
  ]

  allItems: Item[] = [
    {
      category_id: 'e0',
      cover: 'assets/imgs/salad.jpg',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '12wefdefsdss',
      variation: false,
      veg: true,
    },
    {
      category_id: 'e00',
      cover: 'assets/imgs/pizza.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
    {
      category_id: 'e0',
      cover: 'assets/imgs/salad.jpg',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: true,
    },
    {
      category_id: 'e00',
      cover: 'assets/imgs/pasta.jpg',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150.5,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
  ]

  addresses: Address[] = [
    {
      address: 'Fancy Bazaar, India',
      house: '2nd Floor',
      id: '7Kox63KlggTvV7ebRKar',
      landmark: 'Fancy Bazar',
      lat: 26.1830738,
      lng: 91.74049769999999,
      title: 'Fancy',
      user_id: '1',
    },
    {
      address: 'Kanuat palace, India',
      house: 'Ground Floor',
      id: '8Kox63KlggTvV7ebRKar',
      landmark: 'Bazar',
      lat: 26.1830738,
      lng: 91.74049769999999,
      title: 'Work',
      user_id: '1',
    },
    {
      address: 'Delhi, India',
      house: '2nd Floor',
      id: '7Kox63KlggTvV7ebRDelhi',
      landmark: 'Delhi',
      lat: 28.649944693035188,
      lng: 77.23961776224988,
      title: 'Delhi',
      user_id: '1',
    },
  ]

  orders: Order[] = [
    {
      address: {
        address: 'Indira Nagar Rd, Borsojai, Basistha 781029, India',
        house: 'dsgd',
        id: 'cLQdnS8YXk5HTDfM3UQC',
        landmark: 'fdgs',
        lat: 26.108991978867923,
        lng: 91.79069981213378,
        title: 'yui',
        user_id: '1',
      },
      deliveryCharge: 20,
      grandTotal: 540.0,
      id: '5aG0RsPuze8NX00B7uRP',
      order: [
        {
          category_id: 'e0',
          cover: 'assets/imgs/salad.jpg',
          desc: 'Great in taste',
          id: 'i2',
          name: 'Caprese Salad',
          price: 200,
          rating: 0,
          status: true,
          uid: '12wefdefsdss',
          variation: false,
          veg: true,
          quantity: 1,
        },
      ],
      paid: 'COD',
      restaurant:
        // {address: "Christan Basti, India",  city: "909090567", closeTime: "21:00", cover: "", cuisines: ["Caribbean food", "North Indian", "Vietnamese"], delivery_time: 25, description: "dd", email: "DosaPlaza@gmail.com", latitude: 26.1286243, longitude: 91.8012675, uid: "12wefdefsdss", isClose: true, name: "DosaPlaza", openTime: "07:00", phone: 6619563867, price: 27, rating: 4.7, short_name: "stayfit", status: "open", totalRating: 13},
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Stayfit1',
          short_name: 'stayfit1',
          cuisines: ['Italian', 'Mexican'],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
        },
      restaurant_id: '12wefdefsdss',
      status: 'created',
      time: 'Jul 6, 2020 11:44 AM',
      total: 520.0,
      user_id: '1',
    },
    {
      address: {
        address: 'Indira Nagar Rd, Borsojai, Basistha 781029, India',
        house: 'dsgd',
        id: 'cLQdnS8YXk5HTDfM3UQC',
        landmark: 'fdgs',
        lat: 26.108991978867923,
        lng: 91.79069981213378,
        title: 'yui',
        user_id: '1',
      },
      deliveryCharge: 20,
      grandTotal: 440.0,
      id: '5aG0RsPuze8NX00B7uR1',
      order: [
        {
          category_id: 'e00',
          cover: 'assets/imgs/pizza.jpg',
          desc: 'Great in taste',
          id: 'i1',
          name: 'Pizza',
          price: 120,
          quantity: 1,
          rating: 0,
          status: true,
          uid: '12wefdss',
          variation: false,
          veg: false,
        },
        {
          category_id: 'e00',
          cover: 'assets/imgs/pasta.jpg',
          desc: 'Great in taste',
          id: 'i3',
          name: 'Pasta',
          price: 150,
          quantity: 2,
          rating: 0,
          status: true,
          uid: '12wefdss',
          variation: false,
          veg: false,
        },
      ],
      paid: 'COD',
      restaurant: {
        address: 'Beltola Tiniali, India',
        city: '909090271',
        closeTime: '20:00',
        cover: 'assets/imgs/1.jpg',
        cuisines: ['Italian', 'Mexican'],
        delivery_time: 25,
        description: 'dd',
        email: 'stay@fit.com',
        uid: '12wefdss',
        isClose: true,
        latitude: 26.1286243,
        longitude: 91.8012675,
        name: 'Stayfit',
        openTime: '08:00',
        phone: 6786745745,
        price: 25,
        rating: 0,
        short_name: 'stayfit',
        status: 'open',
        totalRating: 0,
      },
      restaurant_id: '12wefdss',
      status: 'Delivered',
      time: 'Jul 7, 2020 11:44 AM',
      total: 420.0,
      user_id: '1',
    },
  ]
}
