// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJKs5TJDSTULX94XwmMqh9d2Pl7cCMe5s',
  authDomain: 'redgeisha-9c809.firebaseapp.com',
  projectId: 'redgeisha-9c809',
  storageBucket: 'redgeisha-9c809.appspot.com',
  messagingSenderId: '137924479332',
  appId: '1:137924479332:web:2e678ca93e69ff1e121271',
  measurementId: 'G-HHR5XR395D',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const environment = {
  production: false,
  firebase: firebaseConfig,
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
